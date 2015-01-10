app.controller('EditProfileController', function($scope, $location, $rootScope, editProfileData, authentication, allTownsData, notify) {
	if (authentication.isLoggedIn()) {
		editProfileData.getUserProfile()
		.$promise 
		.then(function(data) {
			$scope.user = data;
		}, function(error) {
			notify.showError("Cannot load user profile.", error)
		})

		allTownsData.getAllTowns()
		.$promise 
		.then(function(data) {
			$scope.towns = data;
		}, function(error) {
			notify.showError("Cannot load towns.", error);
		});

		$scope.update = function update(user, updateUser) {
			editProfileData.editUserProfile(user)
			.$promise
			.then(function(data) {
				notify.showInfo("Edit Profile succesfully!");
				$location.path('/user/profile/show');
				$rootScope.$broadcast('update', data);
			}, function(error) {
				notify.showError("Cannot edit user profile.", error);
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
				notify.showError("Cannot change password.", error);
			})
		}
	} else {
		$location.path('');
	}

})