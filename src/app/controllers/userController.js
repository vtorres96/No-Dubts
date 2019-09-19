const { User } = require('../models/');

module.exports = {
	async index(req, res) {
		await User.findAll().then(users => {
			console.log(users);
		});
	}
};
