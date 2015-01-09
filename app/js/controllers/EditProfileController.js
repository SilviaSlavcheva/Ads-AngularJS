app.controller('EditProfileController', function($scope, $location, $rootScope, editProfileData, authentication, allTowns, notify) {
	if (authentication.isLoggedIn()) {
	//console.log(authentication.getHeaders());
	editProfileData.getUserProfile()
	.$promise 
	.then(function(data) {
		$scope.user = data;
		//console.log(data);
	})

	allTowns.getAllTowns()
	.$promise 
	.then(function(data) {
		$scope.towns = data;
		//console.log(data);
	}, function(error) {
		notify.showError(error);
	});


	$scope.update = function update(user, updateUser) {
		editProfileData.editUserProfile(user)
		.$promise
		.then(function(data) {
			notify.showInfo("Edit Profile succesfully!");
			$location.path('/userProfile');
			$rootScope.$broadcast('update', data);
		}, function(error) {
			notify.showError(error);
		});
	}

	$scope.cancel = function cancel() {
		$location.path('/userProfile');
	}

	$scope.changePassword = function changePassword(password, changePass) {
		editProfileData.changeUserPassword(password)
		.$promise
		.then(function(data) {
			notify.showInfo("Password changed successfully!")
		}, function(error) {
			notify.showError(error);
		})
	}
} else {
	$location.path('');
}

})