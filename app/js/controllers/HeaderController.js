app.controller('HeaderController', function($scope, $location, headerData, authentication, userData) {
	$scope.home = 'Home';
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
				$scope.titleHeader = false;
				$scope.titleName = '';
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
				$scope.titleHeader = false;
				$scope.titleName = '';
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
				$scope.titleHeader = false;
				$scope.titleName = '';
			};
		};
	});




		$scope.logout = function logout() {
			authentication.removeUser();
			$location.path('#/');
			$scope.showUserData = false;
			$scope.logoutTitle = '';
			$scope.titleHeader = false;
			$scope.titleName = '';
			$scope.username = '';
			
		}
})