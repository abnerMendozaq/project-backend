const Sequelize = require('sequelize');
const sequelize = require('../database');
const empresa = require('./empresa');

const Saldo = sequelize.define('saldo', {
    idSaldo: {
        type: Sequelize.INTEGER(11),
        field: 'idSaldo',
        autoIncrement: true,
        primaryKey: true
    },
    importe: {
        type: Sequelize.DECIMAL(18.2),
        field: 'importe',
        allowNull: false
    },
    fecha: {
        type: Sequelize.DATEONLY,
        field: 'fecha',
        allowNull: false
    },
    fechaRegistro: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'fechaRegistro',
        allowNull: false
    },
    fechaActualizacion: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: true
    },
    idEmpresa: {
        type: Sequelize.INTEGER(11),
        field: 'idEmpresa',
        refences: {
            model: empresa,
            id: 'idEmpresa'
        },
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});
module.exports = Saldo;