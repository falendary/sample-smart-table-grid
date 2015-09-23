(function() {

	'use strict';

	module.exports = function($stateProvider, $urlRouterProvider) {

		console.log('work?');

		$stateProvider
			.state('interface', {
				url: '',
				templateUrl: 'interface.html',
				abstract: true
			})
			.state('interface.tablegrid', {
				url: '/',
				templateUrl: 'tableGrid.html'
			});

		$urlRouterProvider.otherwise('/');
	}

}());
