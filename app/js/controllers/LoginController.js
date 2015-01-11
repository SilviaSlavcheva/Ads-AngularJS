'use strict';
app.controller('LoginControlller', function($scope, $rootScope, $location, userData, authentication, notify) {
	$scope.login = function(user, loginUser) {
		userData.login(user)
		.$promise 
		.then(function(data) {
			console.log(authentication.isAdmin());
			if (authentication.isAdmin()) {
					$location.path('/admin/home');
				} else {
					$location.path('/user/profile/show');
				}
			
			$rootScope.$broadcast('login', data);
			
		}, function(error) {
			notify.showError('Login failed.', error);
		});
	}

	$scope.redirectToRegister = function() {
		$location.path('/register');
	}
});