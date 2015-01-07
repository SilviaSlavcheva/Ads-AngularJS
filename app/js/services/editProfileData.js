app.factory('editProfileData', function($resource, $http, baseServiceUrl, authentication) {
	$http.defaults.headers.common['Authorization'] = authentication.getHeaders().Authorization;
	var resource = $resource(
		baseServiceUrl + '/user/profile',
		{id: '@id'}, 
		{ update: {
			method: 'PUT'
		},
	});

	function getUserProfile() {
		return resource.get();
	}

	function changeUserPassword(newPassword) {
		return $resource(
			baseServiceUrl + '/user/changePassword',
			{id: '@id'}, 
			{ update: {
				method: 'PUT'
			},
		})
		.update(newPassword);
	}

	function editUserProfile(user) {
		return resource.update(user);
	}

	return {
		getUserProfile: getUserProfile,
		changeUserPassword: changeUserPassword,
		editUserProfile: editUserProfile
	}
})