app.controller('LoginControlller', function($scope, $rootScope, $location, userData) {
	$scope.login = function(user, loginUser) {
		userData.login(user)
		.$promise 
		.then(function(data) {
			$location.path('/userProfile');
			
			$rootScope.$broadcast('login', data);
			
		});
		//console.log(user)
	}

	$scope.redirectToRegister = function() {
		$location.path('/register');
	}
})