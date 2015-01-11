'use strict';

app.controller('MainController', function($scope,$log, $location, $rootScope, authentication) {
	$scope.authentication = authentication;

    $scope.setHome = function setHome(data) {
      $rootScope.$broadcast('setHome', data);
    }

     $scope.setPublishNewAd = function setPublishNewAd(data) {
      $rootScope.$broadcast('setPublishNewAd', data);
    }

     $scope.setEditProfile = function setEditProfile(data) {
      $rootScope.$broadcast('setEditProfile', data);
    }

    $scope.defaultImage = 'http://img1.wikia.nocookie.net/__cb20120511110342/lou/images/a/ac/No_image_available.svg';
    $scope.defautTownText = 'No Town';
    $scope.defautCategoryText = 'No Category';
	
});
