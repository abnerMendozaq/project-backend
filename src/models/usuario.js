const Sequelize = require('sequelize');
const sequelize = require('../database');
const persona = require('./persona');

const Usuario = sequelize.define('usuario', {
    idUsuario: {
        type: Sequelize.INTEGER(11),
        field: 'idUsuario',
        autoIncrement: true,
        primaryKey: true
    },
    nombreUsuario: {
        type: Sequelize.STRING(20),
        field: 'nombreUsuario',
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(100),
        field: 'password',
        allowNull: true
    },
    rol: {
        type: Sequelize.STRING(20),
        field: 'rol',
        allowNull: true
    },
    foto: {
        type: Sequelize.STRING(100),
        field: 'foto',
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
        allowNull: false
    },
    fechaActualizacion: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: true
    },
    idPersona: {
        type: Sequelize.INTEGER(11),
        field: 'idPersona',
        refences: {
            model: persona,
            id: 'idPersona'
        },
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});
module.exports = Usuario;