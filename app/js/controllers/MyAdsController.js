app.controller('MyAdsController', function($scope, $location, myAdsData, authentication, allCategories, allTowns, notify) {
	if (authentication.isLoggedIn()) {

	myAdsData.getAllMyAds() 
	.$promise
	.then(function(data) {
		$scope.allMyAds = data;
		//console.log(data);
		//notify.showInfo("Successful!");
	}, function(error) {
		notify.showError(error);
	});
	
	var status = {status: 'Inactive'};
	myAdsData.getAllMyAds(status) 
	.$promise
	.then(function(data) {
		$scope.allInactiveAds = data;
		// console.log(data);
		// notify.showInfo("Successful!");
	}, function(error) {
		notify.showError(error);
	});

	$scope.deactivateAd = function deactivateAd(adId, ad) {
		myAdsData.editMyAd(adId, ad)
		.$promise
		.then(function(data) {
			//console.log(data);
			notify.showInfo('Deactivate ad successfully!');
		}, function(error) {
			notify.showError(error);
		})
	}


	$scope.publishAgain = function publishAgain(adId, ad) {
		myAdsData.publishAgainAd(adId, ad)
		.$promise
		.then(function(data) {
			//console.log(data);
			notify.showInfo('Publish again Ad successfully!');
		}, function(error) {
			notify.showError(error);
		})
	}



	 $scope.edit = function edit(adId, ad) {
	 	$location.path('user/editAd');
	// 	myAdsData.getUserAdById(adId)
	// 	.$promise
	// 	.then(function(data) {
	// 		$scope.currentAd = data;
	// 		$scope.hello = "Hello";
	// 		console.log(data);
	// 		$location.path('/user/editAd');
	// 	}, function(error) {
	// 		notify.showError(error);
	// 	})
	 }

	$scope.deleteAd = function deleteAd(adId, ad) {

	}

	$scope.defaultImage = 'http://img1.wikia.nocookie.net/__cb20120511110342/lou/images/a/ac/No_image_available.svg';
	$scope.defautTownText = 'No Town';
	$scope.defautCategoryText = 'No Category';

	// allCategories.getAllCategories()
	// .$promise
	// .then(function(data) {
	// 	$scope.categories = data;
	// }, function(error) {
	// 	notify.showError(error);
	// });

	// allTowns.getAllTowns()
	// .$promise
	// .then(function(data) {
	// 	$scope.towns = data;
	// }, function(error) {
	// 	notify.showError(error);
	// })


} else {
	$location.path('/');
}
})