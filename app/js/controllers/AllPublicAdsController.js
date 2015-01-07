app.controller('AllPublicAdsController', function($scope, $log, allPublicAds, filter) {
	$scope.ready = false;

	function loadPublicAds(filterParams) {
		filterParams = filterParams || {};
		allPublicAds.getAllAds(filterParams)
		.$promise
		.then(function (data) {
			$scope.allAds = data;
			//console.log($scope.allAds);
			$scope.ready = true;
		}, function (error) {
			$log.error(error);
		});
	}

	loadPublicAds();

	$scope.$on('setCurrentCategory', function(category) {
		loadPublicAds(filter.getFilterParams());
	});

	$scope.$on('setCurrentTown', function(town) {
		loadPublicAds(filter.getFilterParams());
	});

	$scope.defaultImage = 'http://img1.wikia.nocookie.net/__cb20120511110342/lou/images/a/ac/No_image_available.svg';
});