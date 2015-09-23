(function() {

	module.exports = function(Restangular) {

		var generateRandomItem = function(id) {

			var firstnames = ['Laurent', 'Blandine', 'Olivier', 'Max'];
			var email = ['Renard@test.ru', 'Faivre@test.ru', 'Frere@test.ru', 'Eponge@test.ru'];
			var phone = ['999-999-99-99', '888-888-88-88', '777-777-77-77', '555-555-55-55'];
			var dates = ['1987-05-21', '1987-04-25', '1955-08-27', '1966-06-06'];
			var id = id || 1;

			var name = firstnames[Math.floor(Math.random() * 3)];
			var email = email[Math.floor(Math.random() * 3)];
			var phone = phone[Math.floor(Math.random() * 3)];
			var lastOnline = dates[Math.floor(Math.random() * 3)];

			return {
				id: id,
				name: name,
				email: email,
				phone: phone,
				lastOnline: new Date(lastOnline)
			}
		}

		var getPendingUsers = function() {

			var rowCollectionPage = [];
			for (var j = 0; j < 200; j++) {
				rowCollectionPage.push(generateRandomItem(j));
			}

			return rowCollectionPage;

		}

		var getUsers = function() {
			var rowCollectionPage = [];
			for (var j = 0; j < 200; j++) {
				rowCollectionPage.push(generateRandomItem(j));
			}

			return rowCollectionPage;
		}

		return {
			getPendingUsers: getPendingUsers,
			getUsers: getUsers
		}

	}

}());