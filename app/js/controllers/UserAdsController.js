'use strict';

app.controller('UserAdsController', 
	function($scope, $location, $rootScope, UserAdsData, authentication, notify) {
		if (authentication.isLoggedIn()) {
			$scope.setStatus = function setStatus(status) {
				UserAdsData.setStatusAd(status);
				$rootScope.$broadcast('setStatus', status);
			};

			UserAdsData.getAllUserAds(UserAdsData.getStatusAd()) 
			.$promise
			.then(function(data) {
				$scope.allUserAds = data;
			}, function(error) {
				notify.showError("Load ads failed.", error);
			});
			
			$scope.deactivateAd = function deactivateAd(adId, ad) {
				UserAdsData.deactivateUserAd(adId, ad)
				.$promise
				.then(function(data) {
					notify.showInfo('Deactivate ad successfully!');
				}, function(error) {
					notify.showError("Deactivate ad failed.", error);
				});
			};

			$scope.publishAgain = function publishAgain(adId, ad) {
				UserAdsData.publishAgainAd(adId, ad)
				.$promise
				.then(function(data) {
					notify.showInfo('Publish again Ad successfully!');
				}, function(error) {
					notify.showError("Publish again ad failed.", error);
				});
			};

			 $scope.editButton = function editButton(adId, ad) {
			 	UserAdsData.setUserAdId(adId);
			 	$location.path('user/ads/edit/' + adId);
			 	 $rootScope.$broadcast('editButton', adId);
			 }

			 $scope.deleteAd = function deleteAd(adId, ad) {
				UserAdsData.setUserAdId(adId);
			 	console.log(adId);
			 	$location.path('user/ads/delete/' + adId);
			 	 $rootScope.$broadcast('deleteAd', adId);
			 }


			$scope.defaultImage = 'http://img1.wikia.nocookie.net/__cb20120511110342/lou/images/a/ac/No_image_available.svg';
			$scope.defautTownText = 'No Town';
			$scope.defautCategoryText = 'No Category';

		} else {
			$location.path('/');
		}
});