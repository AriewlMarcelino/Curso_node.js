const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_mvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate()
    console.log('Database is conected sucessfull..')
} catch (error) {
    console.log(`Database is not conected...`)
}

exports.default = sequelize;