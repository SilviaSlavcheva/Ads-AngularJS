'use strict';

app.controller('AllPublicAdsController', function($scope, $log, allPublicAdsData, filter, notify) {
	$scope.ready = false;

	function loadPublicAds(filterParams) {
		filterParams = filterParams || {};
		allPublicAdsData.getAllAds(filterParams)
		.$promise
		.then(function (data) {
			$scope.allAds = data;
			$scope.ready = true;
		}, function (error) {
			notify.showError('Ads cannot be loaded.', error);
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

	$scope.totalItems = 64;
	 $scope.currentPage = 1;

	 $scope.setPage = function (pageNo) {
	    $scope.currentPage = pageNo;
	 };

	 $scope.pageChanged = function() {
	   $log.log('Page changed to: ' + $scope.currentPage);
	 };

	 $scope.maxSize = 5;
	 $scope.bigTotalItems = 175;
	 $scope.bigCurrentPage = 1;
});