const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user');

class Comment extends Model {}

Comment.init (
    {
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'comment'
    }
);

module.exports = User;