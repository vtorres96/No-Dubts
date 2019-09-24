'use strict';
module.exports = (sequelize, DataTypes) => {
	const Questions = sequelize.define(
		'questions',
		{
			title: DataTypes.STRING,
			content: DataTypes.STRING,
			users_id: DataTypes.INTEGER,
			categories_id: DataTypes.INTEGER
		},
		{}
	);
	Questions.associate = function(models) {
		// associations can be defined here
		// Questions.belongsTo(models.User), Questions.belongsTo(models.Category);
	};
	return Questions;
};
