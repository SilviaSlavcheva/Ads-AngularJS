app.controller('RegisterController', function($scope, $rootScope, $location, userData, authentication, allTowns, notify) {

	allTowns.getAllTowns()
	.$promise
	.then(function(data) {
		$scope.towns = data;
		//console.log(data);
		notify.showInfo("All towns");
	});

	$scope.register = function(user, newUser) {
		//console.log(user)
		userData.register(user)
		.$promise 
		.then(function(data) {
			//console.log(data);
			$location.path('/userProfile');
			
			$rootScope.$broadcast('register', data);
			
		});
	}

	$scope.redirectToLogin = function() {
		$location.path('/login');
	}
});
