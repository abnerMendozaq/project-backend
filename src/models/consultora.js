const Sequelize = require('sequelize');
const sequelize = require('../database');
const persona = require('./persona');

const Consultora = sequelize.define('consultora', {
    idConsultora: {
        type: Sequelize.INTEGER(11),
        field: 'idConsultora',
        autoIncrement: true,
        primaryKey: true
    },
    nit: {
        type: Sequelize.BIGINT(20),
        field: 'nit',
        allowNull: false
    },
    razonSocial: {
        type: Sequelize.STRING(150),
        field: 'razonSocial',
        allowNull: false
    },
    nroColegiado: {
        type: Sequelize.STRING(15),
        field: 'nroColegiado',
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
        field: 'fechaActualizacion',
        allowNull: true
    },
    idUsuario: {
        type: Sequelize.INTEGER(11),
        field: 'idUsuario',
        references: 'usuario',
        referencesKey: 'idUsuario',
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
module.exports = Consultora;