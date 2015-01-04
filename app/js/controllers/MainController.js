app.controller('MainController', function($scope, mainData) {
	$scope.home = 'Home';
	$scope.sortOrder = '-townId';
	$scope.curentCategory = "Blagoevgrad";
	 function setCurrentCategory(category) {
	 	$scope.curentCategory = category;
	 	console.log($scope.curentCategory.id);
	 }
	 $scope.setCurrentCategory = setCurrentCategory;

	 $scope.currentTown = "Blagoevgrad";
	 function setCurrentTown(town) {
	 	$scope.currentTown = town;
	 	console.log($scope.currentTown.id);
	 }
	 $scope.setCurrentTown = setCurrentTown;



	$scope.defaultImage = 'http://img1.wikia.nocookie.net/__cb20120511110342/lou/images/a/ac/No_image_available.svg';
	$scope.change = function() {
		$scope.home = 'Welcome Silvia';
	};
	var id = 1;
	mainData.getAllAds(function(resp) {
		$scope.data = resp;
	})
	mainData.getAllTowns(function(resp) {
		$scope.towns = resp;
	})
	mainData.getAllCategories(function(resp) {
		$scope.categories = resp;
	})



	// $scope.getCategotyId = function(idCategory) {
	// 	console.log(idCategory);
	// }
	// $scope.getTownId = function(idTown) {
	// 	console.log(idTown);
	// 	$scope.townFilter = idTown;
	// 	console.log($scope.townFilter);
	// };

	// 	$scope.filterFunction = function(element) {
	// 	  return {townId: $scope.townFilter};
	// 	};

});
