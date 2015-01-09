app.controller('EditAdController', function($scope, allCategories, allTowns, notify) {
	$scope.edit = function edit(adId, ad) {
		myAdsData.getUserAdById(adId)
		.$promise
		.then(function(data) {
			$scope.currentAd = data;
			console.log(data);
			$location.path('/user/editAd');
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

})