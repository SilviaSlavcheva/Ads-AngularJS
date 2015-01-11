'use strict';

app.factory('headerData', function($resource, baseServiceUrl) {
	var resource = $resource(
		baseServiceUrl + '/user/ads/:id', 
		//'http://localhost:1337/api/user/ads/:id', 
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