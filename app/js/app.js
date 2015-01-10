'use strict';

var app = angular.module('softUniApp', ['ngRoute', 'ngResource', 'flow', 'naif.base64']);

app.constant('baseServiceUrl', 'http://localhost:1337/api');
app.constant('pageSize', 2);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/mainPage/homePage.html',
		controller: 'MainController'
	});
	$routeProvider.when('/login', {
		templateUrl: 'templates/mainPage/login.html',
		controller: 'LoginControlller'
	});
	$routeProvider.when('/register', {
		templateUrl: 'templates/mainPage/register.html',
		controller: 'RegisterController'
	});
	$routeProvider.when('/logout', {
		templateUrl: 'templates/mainPage/homePage.html',
		controller: 'MainController'
	});
	$routeProvider.when('/user/profile/show', {
		templateUrl: 'templates/userProfile/mainPageUser.html',
		controller: 'MainController'
	});
	$routeProvider.when('/user/editProfile', {
		templateUrl: 'templates/userProfile/editProfile.html',
		controller: 'EditProfileController'
	});
	$routeProvider.when('/user/publishNewAd', {
		templateUrl: 'templates/userProfile/publishNewAdPage.html',
		controller: 'PublishAdController'
	})
	$routeProvider.when('/user/ads', {
		templateUrl: 'templates/userProfile/allUserAdsPage.html',
		controller: 'UserAdsController'
	});
	$routeProvider.when('/user/inactiveAds', {
		templateUrl: 'templates/userProfile/allInactiveAds.html',
		controller: 'UserAdsController'
	});
	$routeProvider.when('/user/editAd', {
		templateUrl: 'templates/userProfile/editPage.html',
		controller: 'UserAdsController'
	});
	$routeProvider.when('/user/deleteAd', {
		templateUrl: 'templates/userProfile/deleteAdPage.html',
		controller: 'UserAdsController'
	});
	$routeProvider.when('/user/publishedAds', {
		templateUrl: 'templates/userProfile/publishedUserAds.html',
		controller: 'UserAdsController'
	});
	$routeProvider.when('/user/waitingApprovalAds', {
		templateUrl: 'templates/userProfile/waitingApprovalUserAds.html',
		controller: 'UserAdsController'
	});
	$routeProvider.when('/user/rejectedAds', {
		templateUrl: 'templates/userProfile/rejectedUserAds.html',
		controller: 'UserAdsController'
	});
	$routeProvider.otherwise({redirectTo: '/'});
});


