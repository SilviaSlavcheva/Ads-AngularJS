app.controller('UserAdsController', function($scope, $location, $rootScope, UserAdsData, authentication, notify) {
	if (authentication.isLoggedIn()) {
		$scope.setStatus = function setStatus(status) {
			UserAdsData.setStatusAd(status);
			console.log(status);
		};

		UserAdsData.getAllUserAds(UserAdsData.getStatusAd()) 
		.$promise
		.then(function(data) {
			$scope.allUserAds = data;
		}, function(error) {
			notify.showError("Cannot load user ads.", error);
		});
		
		$scope.deactivateAd = function deactivateAd(adId, ad) {
			UserAdsData.deactivateUserAd(adId, ad)
			.$promise
			.then(function(data) {
				notify.showInfo('Deactivate ad successfully!');
			}, function(error) {
				notify.showError("Cannot deactivate user ad.", error);
			});
		};

		$scope.publishAgain = function publishAgain(adId, ad) {
			UserAdsData.publishAgainAd(adId, ad)
			.$promise
			.then(function(data) {
				notify.showInfo('Publish again Ad successfully!');
			}, function(error) {
				notify.showError("Cannot publish again user ad.", error);
			});
		};

		 $scope.editButton = function editButton(adId, ad) {
		 	UserAdsData.setUserAdId(adId);
		 	console.log(UserAdsData.getUserAdId());
		 	$location.path('user/editAd');
		 }

		 $scope.deleteAd = function deleteAd(adId, ad) {
			UserAdsData.setUserAdId(adId);
		 	console.log(UserAdsData.getUserAdId());
		 	$location.path('user/deleteAd');
		 }


		$scope.defaultImage = 'http://img1.wikia.nocookie.net/__cb20120511110342/lou/images/a/ac/No_image_available.svg';
		$scope.defautTownText = 'No Town';
		$scope.defautCategoryText = 'No Category';

	} else {
		$location.path('/');
	}
});