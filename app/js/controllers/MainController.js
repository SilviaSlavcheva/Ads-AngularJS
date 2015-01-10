app.controller('MainController', function($scope,$log, $location, $rootScope, authentication) {
	$scope.authentication = authentication;

  $scope.setHome = function setHome(data) {
      $rootScope.$broadcast('setHome', data);
    }

    //  $scope.setStatus = function setStatus(data) {
    //   $rootScope.$broadcast('setStatus', data);
    // }

     $scope.setPublishNewAd = function setPublishNewAd(data) {
      $rootScope.$broadcast('setPublishNewAd', data);
    }

     $scope.setEditProfile = function setEditProfile(data) {
      $rootScope.$broadcast('setEditProfile', data);
    }
	

	// $scope.totalItems = 64;
 //  $scope.currentPage = 1;

 //  $scope.setPage = function (pageNo) {
 //    $scope.currentPage = pageNo;
 //  };

 //  $scope.pageChanged = function() {
 //    $log.log('Page changed to: ' + $scope.currentPage);
 //  };

 //  $scope.maxSize = 5;
 //  $scope.bigTotalItems = 175;
 //  $scope.bigCurrentPage = 1;
});
