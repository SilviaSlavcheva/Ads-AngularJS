app.factory('mainData', function($resource, $log) {

var resource = $resource(
		'http://localhost:1337/api/towns', 
		{id: '@id'}, 
		{ update: {
			method: 'PUT'
		}
	});

	function getAllTowns() {
		return resource.query();
	}
	function getAllCategories() {
		return resource.query();
	}
	function getAllAds() {
		return resource.query();
	}

	return {
		getAllTowns: getAllTowns,
		getAllCategories: getAllCategories,
		getAllAds: getAllAds
	}
	// return {
	// 	// getAllAds: function(success, id) {
	// 	// 	$http({method: 'GET', url: 'http://localhost:1337/api/ads?PageSize=10&StartPage=' + id})
	// 	// 	.success(function(data, status, header, config) {
	// 	// 		success(data);
	// 	// 	})
	// 	// 	.error(function(data, status, header, config) {
	// 	// 		$log.warn(data);
	// 	// 	})
	// 	// },
	// 	getAllTowns: function(success) {
	// 		$http({method: 'GET', url: 'http://localhost:1337/api/towns'})
	// 		.success(function(data, status, header, config) {
	// 			success(data);
	// 		})
	// 		.error(function(data, status, header, config) {
	// 			$log.warn(data);
	// 		})
	// 	},
	// 	getAllCategories: function(success) {
	// 		$http({method: 'GET', url: 'http://localhost:1337/api/categories'})
	// 		.success(function(data, status, header, config) {
	// 			success(data);
	// 		})
	// 		.error(function(data, status, header, config) {
	// 			$log.warn(data);
	// 		})
	// 	}
	// }
})