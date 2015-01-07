app.factory('headerData', function($resource) {
	var resource = $resource(
		'http://localhost:1337/api/user/ads/:id', 
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
})