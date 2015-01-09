app.controller('MyAdsController', function($scope, $location, myAdsData, authentication, notify) {
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
			console.log(data);
			notify.showInfo('Publish again Ad successfully!');
		}, function(error) {
			notify.showError(error);
		})
	}



	$scope.edit = function edit(adId, ad) {

	}

	$scope.deleteAd = function deleteAd(adId, ad) {

	}

	$scope.defaultImage = 'http://img1.wikia.nocookie.net/__cb20120511110342/lou/images/a/ac/No_image_available.svg';
	$scope.defautTownText = 'No Town';
	$scope.defautCategoryText = 'No Category';
} else {
	$location.path('/');
}
})