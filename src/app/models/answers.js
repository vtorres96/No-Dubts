'use strict';
module.exports = (sequelize, DataTypes) => {
	const Answers = sequelize.define(
		'answers',
		{
			content: DataTypes.STRING,
			questions_id: DataTypes.INTEGER,
			users_id: DataTypes.INTEGER
		},
		{}
	);
	Answers.associate = function(models) {
		// associations can be defined here
		// Answers.belongsTo(models.User), Answers.belongsTo(models.Questions);
	};
	return Answers;
};
