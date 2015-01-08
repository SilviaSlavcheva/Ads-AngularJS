app.controller('PublishAdController', function($scope, $location, publishNewAd, allTowns, allCategories, notify) {
	
	allTowns.getAllTowns()
	.$promise 
	.then(function(data) {
		$scope.towns = data;
		//console.log(data);
	}, function(error) {
		notify.showError(error);
	});

allCategories.getAllCategories()
	.$promise 
	.then(function(data) {
		$scope.categories = data;
		//console.log(data);
	}, function(error) {
		notify.showError(error);
	});


	$scope.addAd = function addAd(ad) {
		console.log(ad);
		console.log(ad.imageDataUrl);
		ad.imageDataUrl = 'data:' + ad.imageDataUrl.filetype + ';base64,' + ad.imageDataUrl.base64;
		console.log(ad.imageDataUrl);
		publishNewAd.createNewAd(ad)
		.$promise 
		.then(function(data) {
			console.log(data)
			notify.showInfo('Advertisement submitted for approval. Once approvad, it will be published');
		}, function(error) {
			notify.showError(error);
		})
	}
})