const Sequelize = require('sequelize');
const sequelize = require('../database');
const consultora = require('./consultora');
const empresa = require('./empresa');

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
    idConsultora: {
        type: Sequelize.INTEGER(11),
        field: 'idConsultora',
        refences: {
            model: consultora,
            id: 'idConsultora'
        },
        allowNull: true
    },
    idEmpresa: {
        type: Sequelize.INTEGER(11),
        field: 'idEmpresa',
        refences: {
            model: empresa,
            id: 'idEmpresa'
        },
        allowNull: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});
module.exports = Usuario;