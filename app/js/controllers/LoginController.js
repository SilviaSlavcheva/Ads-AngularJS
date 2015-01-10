'use strict';
app.controller('LoginControlller', function($scope, $rootScope, $location, userData) {
	$scope.login = function(user, loginUser) {
		userData.login(user)
		.$promise 
		.then(function(data) {
			$location.path('/user/profile/show');
			
			$rootScope.$broadcast('login', data);
			
		});
	}

	$scope.redirectToRegister = function() {
		$location.path('/register');
	}
})