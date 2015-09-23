(function() {

	'use strict';

	module.exports = function($scope, tableGridService) {

		console.log(tableGridService);

		$scope.pendingUsersList = tableGridService.getPendingUsers();
		$scope.usersList = tableGridService.getUsers();

		//  pagination
		$scope.itemsByPagePending = 10;
		$scope.itemsByPageUsers = 10;
	}

}());