const Sequelize = require('sequelize');
const sequelize = require('../database');
const usuario = require('./usuario');
const empresa = require('./empresa');

const Saldo = sequelize.define('saldo', {
    idSaldo: {
        type: Sequelize.INTEGER(11),
        field: 'idSaldo',
        autoIncrement: true,
        primaryKey: true
    },
    saldo: {
        type: Sequelize.TINYINT(4),
        field: 'saldo',
        allowNull: false
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
        allowNull: true
    },
    fechaActualizacion: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'fechaActualizacion',
        allowNull: true
    },
    idUsuario: {
        type: Sequelize.INTEGER(11),
        field: 'idUsuario',
        refences: {
            model: usuario,
            id: 'idUsuario'
        },
        allowNull: true
    },
    idEmpresa: {
        type: Sequelize.INTEGER(11),
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