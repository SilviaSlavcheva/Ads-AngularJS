app.controller('HeaderController', function($scope, $location, headerData, authentication, userData) {
	$scope.home = 'Home';
	$scope.showHomeTitle = true;

	$scope.register = 'Register';
	$scope.login = 'Login';
	$scope.showRegisteAndLogin = true;

	$scope.titleHeader = false;
	$scope.titleName = '';

	$scope.showUserData = false;
	$scope.logoutTitle = '';
	$scope.username= '';

	$scope.showTitle = function showTitle(title, isTrue) {
		$scope.titleHeader = isTrue;
		$scope.titleName = title;
	}

	function loadUserPage() {
		if (authentication.isLoggedIn) {
			$scope.nameUser = authentication.getCurrentUser();

			if ($scope.nameUser) {
				$scope.logoutTitle = 'Logout';
				$scope.username = $scope.nameUser;
				$scope.showUserData = true;
				$scope.titleHeader = true;
				$scope.showRegisteAndLogin = false;
				$scope.showHomeTitle = false;
			};
		};
	}
	
	loadUserPage();

	$scope.$on('register', function(data) {
		if (authentication.isLoggedIn) {
			$scope.nameUser = authentication.getCurrentUser();

			if ($scope.nameUser) {
				$scope.logoutTitle = 'Logout';
				$scope.username = $scope.nameUser;
				$scope.showUserData = true;
				$scope.titleHeader = true;
				$scope.titleName = 'Ads-Home';
				$scope.showRegisteAndLogin = false;
				$scope.showHomeTitle = false;
			};
		};
	});

	$scope.$on('login', function(data) {
		if (authentication.isLoggedIn) {
			$scope.nameUser = authentication.getCurrentUser();

			if ($scope.nameUser) {
				$scope.logoutTitle = 'Logout';
				$scope.username = $scope.nameUser;
				$scope.showUserData = true;
				$scope.showRegisteAndLogin = false;
				$scope.showHomeTitle = false;
				$scope.titleHeader = true;
				$scope.titleName = 'Ads-Home';
			};
		};
	});



	$scope.$on('setHome', function(data) {
		$scope.titleHeader = true;
		$scope.titleName = 'Ads-Home';
	});

	$scope.$on('setStatus', function(data) {
		$scope.titleHeader = true;
		$scope.titleName = 'Ads-My Ads';
		console.log(data);
	});

	$scope.$on('setPublishNewAd', function(data) {
		$scope.titleHeader = true;
		$scope.titleName = 'Ads-Publish new Ad';
	});

	$scope.$on('setEditProfile', function(data) {
		$scope.titleHeader = true;
		$scope.titleName = 'Edit Profile';
	});

	$scope.$on('editButton', function(data) {
		$scope.titleHeader = true;
		$scope.titleName = 'Edit Ad';
	});

	$scope.$on('deleteAd', function(data) {
		$scope.titleHeader = true;
		$scope.titleName = 'Delete Ad';
	});
	


	// $scope.$on('update', function(data) {
	// 	if (authentication.isLoggedIn) {
	// 		$scope.nameUser = authentication.getCurrentUser();

	// 		if ($scope.nameUser) {
	// 			$scope.logoutTitle = 'Logout';
	// 			$scope.username = $scope.nameUser;
	// 			$scope.showUserData = true;
	// 			$scope.titleHeader = false;
	// 			$scope.titleName = '';
	// 		};
	// 	};
	// });




		$scope.logout = function logout() {
			authentication.removeUser();
			$location.path('#/');
			$scope.showUserData = false;
			$scope.logoutTitle = '';
			$scope.titleHeader = false;
			$scope.titleName = '';
			$scope.username = '';
			$scope.showRegisteAndLogin = true;
			$scope.showHomeTitle = true;
		}
})