'use strict';

app.factory('headerData', function($resource, baseServiceUrl) {
	var resource = $resource(
		baseServiceUrl + '/user/ads/:id', 
		{id: '@id'}, 
		{ update: {
			method: 'PUT'
		}
	});

	function getUsername() {
		return '';
	}


	return {
		getUsername: getUsername
	}
});