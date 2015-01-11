'use strict';

app.controller('RegisterController', 
	function($scope, $rootScope, $location, userData, authentication, allTownsData, notify) {

		allTownsData.getAllTowns()
		.$promise
		.then(function(data) {
			$scope.towns = data;
		}, function(error) {
			notify.showError('Towns cannot be loaded.', error);
		});

		$scope.register = function(user, newUser) {
			userData.register(user)
			.$promise 
			.then(function(data) {
				
				$location.path('/user/profile/show');
				
				$rootScope.$broadcast('register', data);
				//console.log(authentication.getUser());
				//console.log(authentication.getCurrentUser);
				
			}, function(error) {
				notify.showError('Registration failed.', error);
			});
		}

		$scope.redirectToLogin = function() {
			$location.path('/login');
		}
});
