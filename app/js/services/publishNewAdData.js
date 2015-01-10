app.factory('publishNewAdData', function($resource, $http, baseServiceUrl, authentication) {
	$http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
	var resource = $resource(
		baseServiceUrl + '/user/ads',
		{id: '@id'}, 
		{ update: {
			method: 'PUT'
		},
	});

	function createNewAd(ad) {
		return resource.save(ad);
	}

	return {
		createNewAd: createNewAd
	}
});