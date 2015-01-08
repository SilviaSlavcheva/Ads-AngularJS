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