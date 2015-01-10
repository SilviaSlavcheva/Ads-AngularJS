app.controller('RegisterController', function($scope, $rootScope, $location, userData, authentication, allTownsData) {

	allTownsData.getAllTowns()
	.$promise
	.then(function(data) {
		$scope.towns = data;
	});

	$scope.register = function(user, newUser) {
		//console.log(user)
		userData.register(user)
		.$promise 
		.then(function(data) {
			//console.log(data);
			$location.path('/user/profile/show');
			
			$rootScope.$broadcast('register', data);
			
		});
	}

	$scope.redirectToLogin = function() {
		$location.path('/login');
	}
});
