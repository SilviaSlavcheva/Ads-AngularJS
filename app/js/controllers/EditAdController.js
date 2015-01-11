'use strict';

app.controller('EditAdController', 
	function($scope, $location, UserAdsData, allCategoriesData, allTownsData, notify) {

	UserAdsData.getUserAdById(UserAdsData.getUserAdId().id)
	.$promise
	.then(function(data) {
		$scope.currentAd = data;
	}, function(error) {
		notify.showError('get user ad failed.', error);
	});


	allCategoriesData.getAllCategories()
	.$promise
	.then(function(data) {
		$scope.categories = data;
	}, function(error) {
		notify.showError('Categories cannot  be loaded.', error);
	});

	allTownsData.getAllTowns()
	.$promise
	.then(function(data) {
		$scope.towns = data;
	}, function(error) {
		notify.showError('Towns cannot be loaded.', error);
	});


	 
	$scope.editAd = function editAd(currentAd, editUserAd) {
		UserAdsData.editUserAd(currentAd.id, currentAd)
		.$promise
		.then(function(data) {
			notify.showInfo("Advertisement edited. Don't forget to submit it for publishing.");
		}, function(error) {
			notify.showError('Edit user Ad failed.', error);
		});
	}

	$scope.defaultImage = 'http://img1.wikia.nocookie.net/__cb20120511110342/lou/images/a/ac/No_image_available.svg';
	$scope.defautTownText = 'No Town';
	$scope.defautCategoryText = 'No Category';

	$scope.cancel = function cancel() {
		$location.path('/user/profile/show');
	}

})