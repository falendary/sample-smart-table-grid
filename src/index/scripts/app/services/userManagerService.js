(function() {

	'use strict';

	module.exports = function(Restangular) {

		var getPendingUsers = function() {
			return Restangular.all('./pendings.json').getList().then(function(data){
				console.log('data', data);
				return data;
			});

		};

		var getUsers = function() {
			return Restangular.all('./users.json').getList().then(function(data){
				return data;
			});
		};

		return {
			getPendingUsers: getPendingUsers,
			getUsers: getUsers
		}

	}

}());