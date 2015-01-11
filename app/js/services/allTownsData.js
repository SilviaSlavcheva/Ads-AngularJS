'use strict';

app.factory('allTownsData', function($resource, baseServiceUrl) {
	var resource = $resource(
		baseServiceUrl + '/towns', 
		{id: '@id'}, 
		{ update: {
			method: 'PUT'
		}
	});

	function getAllTowns() {
		return resource.query();
	}

	return {
		getAllTowns: getAllTowns
	}
});