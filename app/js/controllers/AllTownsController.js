app.controller('AllTownsController', function($scope, $rootScope, $log, allTowns, filter) {
	allTowns.getAllTowns()
	.$promise
	.then(function(data) {
		$scope.towns = data;
	}), function(error) {
		$log.error(error);
	}

	$scope.setCurrentTown = function setCurrentTown(town) {
		filter.filterByTown(town);
		$rootScope.$broadcast('setCurrentTown', town);
	}
})