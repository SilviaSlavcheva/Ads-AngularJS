'use strict';

app.controller('EditProfileController', 
	function($scope, $location, $rootScope, editProfileData, authentication, allTownsData, notify) {
		if (authentication.isLoggedIn()) {
			editProfileData.getUserProfile()
			.$promise 
			.then(function(data) {
				$scope.user = data;
			}, function(error) {
				notify.showError("User profile cannot be loaded.", error)
			});

			allTownsData.getAllTowns()
			.$promise 
			.then(function(data) {
				$scope.towns = data;
			}, function(error) {
				notify.showError("Towns cannot be loaded.", error);
			});

			$scope.update = function update(user, updateUser) {
				editProfileData.editUserProfile(user)
				.$promise
				.then(function(data) {
					notify.showInfo("User profile successfully update!");
					$location.path('/user/profile/show');
					$rootScope.$broadcast('update', data);
				}, function(error) {
					notify.showError("Edit user profile failed.", error);
				});
			}

			$scope.cancel = function cancel() {
				$location.path('/user/profile/show');
			}

			$scope.changePassword = function changePassword(password, changePass) {
				editProfileData.changeUserPassword(password)
				.$promise
				.then(function(data) {
					notify.showInfo("Password changed successfully!")
				}, function(error) {
					notify.showError("Change password failed.", error);
				})
			}
		} else {
			$location.path('');
		}

});