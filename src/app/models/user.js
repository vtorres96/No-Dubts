'use strict';
module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define(
		'User', 
	{
		firstname: {
			type: Sequelize.STRING,
		}, 
		lastname: {
			type: Sequelize.STRING,
		},
		nickname: {
			type: Sequelize.STRING,
		},
		image: {
			type: Sequelize.STRING,
		},
		email: {
			type: Sequelize.STRING,
		},
		password_hash:{
			type: Sequelize.STRING,
		},
		level: {
		 type: Sequelize.INTEGER
		}
	},{
		tableName: 'users',
	});
	// User.associate = function(models) {
	// 	// associations can be defined here
	// };
	return User;
};
