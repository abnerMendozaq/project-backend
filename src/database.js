const Sequelize = require('sequelize');
const config = require('./utils/configDatabase');
const sequelize = new Sequelize(
    config.database,
    config.user,
    config.password,
    {
        host: config.host,
        dialect: config.dialect
    }
);
module.exports = sequelize;