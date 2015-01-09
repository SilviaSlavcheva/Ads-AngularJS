'use strict';

var app = angular.module('softUniApp', ['ngRoute', 'ngResource', 'flow', 'naif.base64']);

app.constant('baseServiceUrl', 'http://localhost:1337/api');
app.constant('pageSize', 2);

app.config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'templates/mainPage/login.html',
		controller: 'LoginControlller'
	});
	$routeProvider.when('/', {
		templateUrl: 'templates/mainPage/homePage.html',
		controller: 'MainController'
	});
	$routeProvider.when('/register', {
		templateUrl: 'templates/mainPage/register.html',
		controller: 'RegisterController'
	});
	$routeProvider.when('/userProfile', {
		templateUrl: 'templates/userProfile/mainPageUser.html',
		controller: 'MainController'
	});
	$routeProvider.when('/logout', {
		templateUrl: 'templates/mainPage/homePage.html',
		controller: 'MainController'
	});
	$routeProvider.when('/editProfile', {
		templateUrl: 'templates/userProfile/editProfile.html',
		controller: 'EditProfileController'
	});
	$routeProvider.when('/publishNewAd', {
		templateUrl: 'templates/userProfile/publishNewAdPage.html',
		controller: 'PublishAdController'
	})
	$routeProvider.when('/user/ads', {
		templateUrl: 'templates/userProfile/allMyAds.html',
		controller: 'MyAdsController'
	});
	$routeProvider.when('/user/inactiveAds', {
		templateUrl: 'templates/userProfile/allInactiveAds.html',
		controller: 'MyAdsController'
	});
	$routeProvider.when('/user/editAd', {
		templateUrl: 'templates/userProfile/editPage.html',
		controller: 'MyAdsController'
	});
	$routeProvider.otherwise({redirectTo: '/'});
});


