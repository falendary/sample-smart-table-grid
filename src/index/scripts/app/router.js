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
			.state('interface.userManager', {
				url: '/',
				templateUrl: 'userManager.html'
			});

		$urlRouterProvider.otherwise('/');
	}

}());
