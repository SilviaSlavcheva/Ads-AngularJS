app.controller('EditAdController', function($scope, $location, myAdsData, allCategories, allTowns, notify) {

	//$scope.$on('editButton', function(adId) {
		//console.log(adId);
		console.log(myAdsData.getUserAdId());

		myAdsData.getUserAdById(myAdsData.getUserAdId().id)
		.$promise
		.then(function(data) {
			$scope.currentAd = data;
			console.log(data);
		}, function(error) {
			notify.showError(error);
		})
	//});

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


	 
	$scope.editAd = function editAd(currentAd, editUserAd) {
		console.log(currentAd);
		myAdsData.editUserAd(currentAd.id, currentAd)
		.$promise
		.then(function(data) {
			console.log(data);
			notify.showInfo("Advertisement edited. Don't forget to submit it for publishing.");
		}, function(error) {
			notify.showError(error);
		});
	}

	$scope.cancel = function cancel() {
		$location.path('/userProfile');
	}

})