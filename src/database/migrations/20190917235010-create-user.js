'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('users', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			firstname: {
				type: Sequelize.STRING,
				allowNull: false
			},
			lastname: {
				type: Sequelize.STRING,
				allowNull: false
			},
			nickname: {
				type: Sequelize.STRING,
				allowNull: false
			},
			image: {
				type: Sequelize.STRING,
				allowNull: true
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false
			},
			password_hash: {
				type: Sequelize.STRING,
				allowNull: false
			},
			level: {
				type: Sequelize.INTEGER,
				defaultValue: false,
				allowNull: false
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('users');
	}
};
