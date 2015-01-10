app.controller('DeleteAdController', function($scope, $location, UserAdsData, allTownsData, allCategoriesData, notify) {
	UserAdsData.getUserAdById(UserAdsData.getUserAdId().id)
	.$promise
	.then(function(data) {
		$scope.currentAd = data;
		console.log(data);
	}, function(error) {
		notify.showError(error);
	});

	$scope.deleteUserAd = function deleteUserAd(adId, ad) {
		UserAdsData.deleteUserAd(adId)
		.$promise
		.then(function(data) {
			//console.log(data);
			notify.showInfo('Delete Ad successfully!');
		}, function(error) {
			notify.showError(error);
		})
	}

	allCategoriesData.getAllCategories()
	.$promise
	.then(function(data) {
		$scope.categories = data;
	}, function(error) {
		notify.showError(error);
	});

	allTownsData.getAllTowns()
	.$promise
	.then(function(data) {
		$scope.towns = data;
	}, function(error) {
		notify.showError(error);
	})

	$scope.cancelDelete = function cancelDelete() {
		$location.path('/user/profile/show');
	}
})