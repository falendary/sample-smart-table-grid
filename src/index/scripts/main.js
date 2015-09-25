(function() {

	'use strict';

	require('whatwg-fetch');

	var app = angular.module('app', [
		'ngAnimate',
		'ngSanitize',
		'ngTable',
		'ui.router',
		'ui.bootstrap',
		'ui.grid',
		'smart-table',
		'restangular'
	]);

	app.config(['$stateProvider', '$urlRouterProvider', require('./app/router')]);

	app.run([function(){
		console.log('App started!');
	}]);

	app.service('userManagerService', ['Restangular', require('./app/services/userManagerService')]);
	app.controller('userManagerController', ['$scope', 'userManagerService', require('./app/controllers/userManagerController')]);

	require('./app/templateCache/templates.min');

}());