'use strict';

app.controller('AllCategoriesController', function($scope, $rootScope, $log, allCategoriesData, filter, notify) {
	allCategoriesData.getAllCategories()
		.$promise
		.then(function (data) {
			$scope.categories = data;
		}, function (error) {
			notify.showError('Categories cannot be loaded.', error);
		});

		$scope.setCurrentCategory = function setCurrentCategory(category) {
			filter.filterByCategory(category);
			$rootScope.$broadcast('setCurrentCategory', category);
		};
});