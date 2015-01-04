var app = angular.module('softUniApp', ['ngRoute'])
.config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'templates/mainPage/login.html',
		controller: 'MainController'
	});
	$routeProvider.when('/allAds', {
		templateUrl: 'templates/mainPage/allAds.html',
		controller: 'MainController'
	});
	$routeProvider.when('/register', {
		templateUrl: 'templates/mainPage/register.html',
		controller: 'MainController'
	});
	$routeProvider.otherwise({redirectTo: '/allAds'});
});


