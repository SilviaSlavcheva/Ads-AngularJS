app.controller('MainController', function($scope) {
	$scope.home = 'Home';
	$scope.change = function() {
		$scope.home = 'Welcome Silvia';
	};
});