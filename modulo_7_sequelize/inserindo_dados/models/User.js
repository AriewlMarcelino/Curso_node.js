const { DataTypes } = require('sequelize')

const db = require('../db/conection')

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    occupation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    },
})

module.exports = User
