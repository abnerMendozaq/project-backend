const Sequelize = require('sequelize');
const sequelize = require('../database');
const usuario = require('./usuario');

const Interes = sequelize.define('interes', {
    idInteres: {
        type: Sequelize.INTEGER(11),
        field: 'idInteres',
        autoIncrement: true,
        primaryKey: true
    },
    fechaInicial: {
        type: Sequelize.DATEONLY,
        field: 'fechaInicial',
        allowNull: false
    },
    fechaFinal: {
        type: Sequelize.DATEONLY,
        field: 'fechaFinal',
        allowNull: true
    },
    tasa: {
        type: Sequelize.FLOAT(4.2),
        field: 'tasa',
        allowNull: false
    },
    activo: {
        type: Sequelize.TINYINT(1),
        field: 'activo',
        allowNull: true
    },
    estado: {
        type: Sequelize.TINYINT(1),
        field: 'estado',
        allowNull: true,
        defaultValue: 1
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
    }
}, {
    freezeTableName: true,
    timestamps: false
});
module.exports = Interes;