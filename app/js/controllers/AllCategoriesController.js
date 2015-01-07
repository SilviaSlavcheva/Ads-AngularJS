app.controller('AllCategoriesController', function($scope, $rootScope, $log, allCategories, filter) {
	allCategories.getAllCategories()
		.$promise
		.then(function (data) {
			$scope.categories = data;
		}, function (error) {
			$log.error(error);
		})

		$scope.setCurrentCategory = function setCurrentCategory(category) {
			filter.filterByCategory(category);
			$rootScope.$broadcast('setCurrentCategory', category);
		}
})