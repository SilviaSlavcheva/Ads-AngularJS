app.factory('myAdsData', function($resource, $http, baseServiceUrl, authentication) {
	$http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
	var resource = $resource(
		baseServiceUrl + '/user/ads',
		{id: '@id'}, 
		{ update: {
			method: 'PUT'
		},
	});

	function getAllMyAds(params) {
		return resource.get(params);
	}

	function editMyAd(adId, ad) {
		return $resource(
			baseServiceUrl +'/user/ads/deactivate/:id',
			{id: '@id'}, 
			{ update: {
				method: 'PUT'
			},
		})
		.update({id: adId}, ad);
	}

	function publishAgainAd(adId, ad) {
		return $resource(
			baseServiceUrl +'/user/ads/publishagain/:id',
			{id: '@id'}, 
			{ update: {
				method: 'PUT'
			},
		})
		.update({id: adId}, ad);
	}

	return {
		getAllMyAds: getAllMyAds,
		editMyAd: editMyAd,
		publishAgainAd: publishAgainAd
	}
})