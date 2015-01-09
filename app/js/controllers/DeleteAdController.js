app.controller('DeleteAdController', function($scope, $location, myAdsData, allTowns, allCategories, notify) {
	myAdsData.getUserAdById(myAdsData.getUserAdId().id)
	.$promise
	.then(function(data) {
		$scope.currentAd = data;
		console.log(data);
	}, function(error) {
		notify.showError(error);
	});

	$scope.deleteUserAd = function deleteUserAd(adId, ad) {
		myAdsData.deleteUserAd(adId)
		.$promise
		.then(function(data) {
			//console.log(data);
			notify.showInfo('Delete Ad successfully!');
		}, function(error) {
			notify.showError(error);
		})
	}

	allCategories.getAllCategories()
	.$promise
	.then(function(data) {
		$scope.categories = data;
	}, function(error) {
		notify.showError(error);
	});

	allTowns.getAllTowns()
	.$promise
	.then(function(data) {
		$scope.towns = data;
	}, function(error) {
		notify.showError(error);
	})

	$scope.cancelDelete = function cancelDelete() {
		$location.path('/userProfile');
	}
})