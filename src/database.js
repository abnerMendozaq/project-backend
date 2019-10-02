const Sequelize = require('sequelize');
const config = require('./utils/configDatabase');
const useTransaction = require('sequelize-transactions');
const sequelize = new Sequelize(
    config.database,
    config.user,
    config.password,
    {
        host: config.host,
        dialect: config.dialect
    }
);
useTransaction(sequelize);
module.exports = sequelize;