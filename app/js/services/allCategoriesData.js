'use strict';

app.factory('allCategoriesData', function($resource, baseServiceUrl) {
	var resource = $resource(
		baseServiceUrl + '/categories', 
		{id: '@id'}, 
		{ update: {
			method: 'PUT'
		}
	});

	function getAllCategories() {
		return resource.query();
	}

	return {
		getAllCategories: getAllCategories
	}
});