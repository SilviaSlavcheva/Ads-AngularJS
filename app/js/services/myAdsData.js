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

	function getUserAdById(id) {
		return $resource(
			baseServiceUrl +'/user/ads/:id',
			{id: '@id'}, 
			{ update: {
				method: 'PUT'
			},
		})
		.get({id: id});
	}

	function editUserAd(id, ad) {
		return $resource(
			baseServiceUrl +'/user/ads/:id',
			{id: '@id'}, 
			{ update: {
				method: 'PUT'
			},
		})
		.update({id: adId}, ad);
	}

	function deleteUserAd(id) {
		return $resource(
			baseServiceUrl +'/user/ads/:id',
			{id: '@id'}, 
			{ update: {
				method: 'PUT'
			},
		})
		.delete({id: id});
	}

	return {
		getAllMyAds: getAllMyAds,
		editMyAd: editMyAd,
		publishAgainAd: publishAgainAd,
		getUserAdById: getUserAdById,
		editUserAd: editUserAd,
		deleteUserAd: deleteUserAd
	}
})