app.controller('CategoryController', function($scope, categoryData, notify) {
	categoryData.getAllCategories()
	.$promise
	.then(function(data) {
		$scope.allCategories = data;
	}, function(error) {
		notify.showError('Load categories failed.', error);
	});
});