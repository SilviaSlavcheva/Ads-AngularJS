app.controller('ConfirmDeleteController', function($scope, adminData, notify) {

	adminData.getAdById(adminData.getCurrentAdId())
		.$promise
		.then(function(data) {
			$scope.currentAd = data;
		}, function(error) {
			notify.showError('Get ad failed.', error);
		});

		$scope.deleteAd = function deleteAd(adId) {
			adminData.deleteAd(adId)
			.$promise
			.then(function(data) {
				notify.showInfo('Deleted ad successful.');
			}, function(error) {
				notify.showError('Deleted ad failed.');
			});
		}
})