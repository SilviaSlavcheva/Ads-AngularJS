app.controller('MainController', function($scope, mainData, userData) {
	$scope.home = 'Home';
	$scope.titleHeader = false;
	$scope.titleName = '';
	$scope.showGreeting = false;
	$scope.greeting = '';
	$scope.curentCategory = null;
	 function setCurrentCategory(category) {
	 	$scope.curentCategory = category;
	 	console.log($scope.curentCategory.id);
	 }
	 $scope.setCurrentCategory = setCurrentCategory;

	 $scope.currentTown = null;
	 function setCurrentTown(town) {
	 	$scope.currentTown = town;
	 	console.log($scope.currentTown.id);
	 }
	 $scope.setCurrentTown = setCurrentTown;


	$scope.defaultImage = 'http://img1.wikia.nocookie.net/__cb20120511110342/lou/images/a/ac/No_image_available.svg';
	$scope.showTitle = function showTitle(title, isTrue) {
		$scope.titleHeader = isTrue;
		$scope.titleName = title;
	}


	var idPageAds = 1;
	mainData.getAllAds(function(resp) {
		$scope.data = resp;
	}, idPageAds)
	mainData.getAllTowns(function(resp) {
		$scope.towns = resp;
	})
	mainData.getAllCategories(function(resp) {
		$scope.categories = resp;
	})

	$scope.changeRoute = function(url, forceReload) {
        $scope = $scope || angular.element(document).scope();
        if(forceReload || $scope.$$phase) { // that's right TWO dollar signs: $$phase
            window.location = url;
        } else {
            $location.path(url);
            $scope.$apply();
        }
    };

	$scope.saveUser = function saveUser(user, newUser) {
		console.log(newUser);
		console.log(user);
		if (newUser.$valid) {
			$scope.userInfo = userData.save(user);
			console.log($scope.userInfo);
			
			console.log($scope.userInfo.username);
			$scope.showGreeting = false;
			$scope.greeting = $scope.userInfo.username;
			
		};
	}
	$scope.cansel= function saveUser() {
		console.log("cansel");
	}



	




	  //  $scope.filteredTodos = []
	  // ,$scope.currentPage = 1
	  // ,$scope.numPerPage = 10
	  // ,$scope.maxSize = 5;

	  // $scope.makeTodos = function() {
	  //   $scope.todos = [];
	  //   for (i=1;i<=1000;i++) {
	  //     $scope.todos.push({ text:'todo '+i, done:false});
	  //   }
	  // };
	  // $scope.makeTodos(); 

	  // $scope.numPages = function () {
	  //   return Math.ceil($scope.todos.length / $scope.numPerPage);
	  // };

	  // $scope.$watch('currentPage + numPerPage', function() {
	  //   var begin = (($scope.currentPage - 1) * $scope.numPerPage)
	  //   , end = begin + $scope.numPerPage;

	  //   $scope.filteredTodos = $scope.todos.slice(begin, end);
 // })




});
