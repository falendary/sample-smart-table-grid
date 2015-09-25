(function() {

	'use strict';

	module.exports = function($scope, userManagerService) {

		//console.log(userManagerService);
		var vm = this;

		userManagerService.getPendingUsers().then(function(data){
			console.log('data ctrl', data);
			vm.pendingUsersList = data;
			//$scope.$apply();
		});

		userManagerService.getUsers().then(function(data){
			vm.usersList = data;
			//$scope.$apply();
		});

		//  pagination
		$scope.itemsByPagePending = 10;
		$scope.itemsByPageUsers = 10;
	}

}());