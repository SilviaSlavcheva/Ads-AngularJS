'use strict';

app.controller('DeleteAdController', 
	function($scope, $location, UserAdsData, allTownsData, allCategoriesData, notify) {

		UserAdsData.getUserAdById(UserAdsData.getUserAdId().id)
		.$promise
		.then(function(data) {
			$scope.currentAd = data;
		}, function(error) {
			notify.showError('Get user ad failed.', error);
		});

		$scope.deleteUserAd = function deleteUserAd(adId, ad) {
			UserAdsData.deleteUserAd(adId)
			.$promise
			.then(function(data) {
				notify.showInfo('Delete Ad successfully!');
			}, function(error) {
				notify.showError('Delete ad failed.', error);
			});
		}

		allCategoriesData.getAllCategories()
		.$promise
		.then(function(data) {
			$scope.categories = data;
		}, function(error) {
			notify.showError('Categories cannot be loaded.', error);
		});

		allTownsData.getAllTowns()
		.$promise
		.then(function(data) {
			$scope.towns = data;
		}, function(error) {
			notify.showError('Towns cannot be loaded', error);
		});

		$scope.cancelDelete = function cancelDelete() {
			$location.path('/user/profile/show');
		}
});