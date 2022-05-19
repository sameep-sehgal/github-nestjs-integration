const Sequelize = require('sequelize');

//Database connection instance (DAO)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage:'./database.sqlite',
    logging: false
});

module.exports = sequelize;