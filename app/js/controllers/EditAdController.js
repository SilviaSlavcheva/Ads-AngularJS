app.controller('EditAdController', function($scope, $location, UserAdsData, allCategoriesData, allTownsData, notify) {

	//$scope.$on('editButton', function(adId) {
		//console.log(adId);
		console.log(UserAdsData.getUserAdId());

		UserAdsData.getUserAdById(UserAdsData.getUserAdId().id)
		.$promise
		.then(function(data) {
			$scope.currentAd = data;
			console.log(data);
		}, function(error) {
			notify.showError(error);
		})
	//});

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


	 
	$scope.editAd = function editAd(currentAd, editUserAd) {
		console.log(currentAd);
		UserAdsData.editUserAd(currentAd.id, currentAd)
		.$promise
		.then(function(data) {
			console.log(data);
			notify.showInfo("Advertisement edited. Don't forget to submit it for publishing.");
		}, function(error) {
			notify.showError(error);
		});
	}

	$scope.cancel = function cancel() {
		$location.path('/user/profile/show');
	}

})