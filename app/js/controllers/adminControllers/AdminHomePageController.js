'use strict';

app.controller('AdminHomePageController', function($scope, $http, $location,  baseServiceUrl, adminData, filter, notify) {
	function loadAds(filterParams) {
		filterParams = filterParams || {};
		adminData.getAllAds(filterParams)
		.$promise 
		.then(function(data) {
			//console.log(data);
			$scope.allAds = data;
		}, function(error) {
			notify.showError('Load ads failed.', error);
		})
	}
	loadAds();

	$scope.$on('setCurrentCategory', function(category) {
		loadAds(filter.getFilterParams());
	});

	$scope.$on('setCurrentTown', function(town) {
		loadAds(filter.getFilterParams());
	});

	$scope.approveAd = function(adId, ad) {
		adminData.approveAd(adId)
		.$promise
		.then(function(data) {
			notify.showInfo('Approve ad successful.');
		}, function(error) {
			notify.showError('Approve ad failed.', error);
		});
	}
	$scope.rejectAd = function rejectAd(adId, ad) {
		adminData.rejectAd(adId)
		.$promise
		.then(function(data) {
			notify.showInfo('Rejected ad successful.');
		}, function(error) {
			notify.showError('Rejected ad failed.');
		});
	}

	$scope.confirmeDeleteAd = function confirmeDeleteAd(adId, ad) {
		
		adminData.setCurrentAdId(adId);
		$location.path('/admin/ads/delete/' + adId);
	}

	$scope.editAd = function editAd(adId, ad) {
		adminData.setCurrentAdId(adId);
		$location.path('/admin/ads/edit/' + adId);
	}
	
});