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

	app.service('tableGridService', ['Restangular', require('./app/services/tableGridService')]);
	app.controller('tableGridController', ['$scope', 'tableGridService', require('./app/controllers/tableGridController')]);

}());