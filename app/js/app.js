var app = angular.module('softUniApp', ['ngRoute'])
.config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'templates/mainPage/login.html',
		controller: 'MainController'
	})
});


