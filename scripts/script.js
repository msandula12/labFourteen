var app = angular.module('catDog', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/partial1.html',
			controller: 'routeCtrl'
		})
		.when('/partials/partial2', {
			templateUrl: 'partials/partial2.html',
			controller: 'routeCtrl'
		})
		.when('/partials/partial3', {
			templateUrl: 'partials/partial3.html',
			controller: 'routeCtrl'
		})
		.otherwise({ redirectTo: '/' });
});