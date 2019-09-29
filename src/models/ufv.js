const Sequelize = require('sequelize');
const sequelize = require('../database');
const usuario = require('./usuario');

const Ufv = sequelize.define('ufv', {
    idUfv: {
        type: Sequelize.INTEGER(11),
        field: 'idUfv',
        autoIncrement: true,
        primaryKey: true
    },
    fechaUfv: {
        type: Sequelize.DATEONLY,
        field: 'fechaUfv',
        allowNull: false
    },
    ufv: {
        type: Sequelize.FLOAT(6.5),
        field: 'ufv',
        allowNull: false
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
        field:'fechaActualizacion',
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
module.exports = Ufv;