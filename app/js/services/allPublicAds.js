app.factory('allPublicAds', function($resource, baseServiceUrl) {
	var resource = $resource(
		baseServiceUrl + '/ads/:adId', 
		//'http://softuni-ads.azurewebsites.net/api/ads',
		{id: '@id'}, 
		{ update: {
			method: 'PUT'
		}
	});

	function getAllAds(filterParams) {
		return resource.get(filterParams);
	}

	function editAd(adId, ad) {
		return resource.update({id: adId}, ad);
	}

	function getAdById(adId) {
		return resource.get({id: adId});
	}

	function addAd(ad) {
		return resource.save(ad);
	}

	function deleteAd(adId) {
		return resource.delete(ad);
	}

	return {
		getAllAds: getAllAds,
		editAd: editAd,
		getAdById: getAdById,
		getAdById: getAdById,
		deleteAd: deleteAd
	}
})