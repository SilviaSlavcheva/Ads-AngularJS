'use strict';

app.controller('AllTownsController', function($scope, $rootScope, $log, allTownsData, filter, notify) {
	allTownsData.getAllTowns()
	.$promise
	.then(function(data) {
		$scope.towns = data;
	}, function(error) {
		notify.showError('Towns cannot be loaded.', error);
	});

	$scope.setCurrentTown = function setCurrentTown(town) {
		filter.filterByTown(town);
		$rootScope.$broadcast('setCurrentTown', town);
	}
});