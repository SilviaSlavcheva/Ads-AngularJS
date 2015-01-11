app.factory('adminData', function($resource, $http, baseServiceUrl, authentication) {
	function getAllAds(filterParams) {
		$http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
		return $resource(
			baseServiceUrl +'/admin/ads',
			{id: '@id'}, 
			{ update: {
				method: 'PUT'
			},
		})
		.get(filterParams);
	}


	function approveAd(id) {
			$http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
			return $resource(
				baseServiceUrl +'/admin/ads/approve/:id',
				{id: '@id'}, 
				{ update: {
					method: 'PUT'
				},
			})
			.update({id: id});
		}

		function rejectAd(id) {
			$http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
			return $resource(
				baseServiceUrl +'/admin/ads/reject/:id',
				{id: '@id'}, 
				{ update: {
					method: 'PUT'
				},
			})
			.update({id: id});
		}

		function deleteAd(id) {
			$http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
			return $resource(
				baseServiceUrl +'/admin/ads/:id',
				{id: '@id'}, 
				{ update: {
					method: 'PUT'
				},
			})
			.delete({id: id});
		}

		function getAdById(id) {
			$http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
			return $resource(
				baseServiceUrl +'/admin/ads/:id',
				{id: '@id'}, 
				{ update: {
					method: 'PUT'
				},
			})
			.get({id: id});
		}

		function editAd(id, ad) {
		return $resource(
			baseServiceUrl +'/admin/ads/:id',
			{id: '@id'}, 
			{ update: {
				method: 'PUT'
			},
		})
		.update({id: id}, ad);
	}

var adId = '';
		function setCurrentAdId(id) {
			adId = id;
		}

		function getCurrentAdId() {
			return adId;
		}


		return {
			getAllAds: getAllAds,
			approveAd: approveAd,
			rejectAd: rejectAd,
			deleteAd: deleteAd,
			getAdById: getAdById,
			setCurrentAdId: setCurrentAdId,
			getCurrentAdId: getCurrentAdId,
			editAd: editAd
		}
})