const { Sequelize } = require('sequelize');
const quelize = require('sequelize');

const sequelize = new Sequelize('bdsequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
try {
    sequelize.authenticate();
} catch (err) {
    console.log(`Sorry database in not connected `, err)
}

module.exports = quelize;