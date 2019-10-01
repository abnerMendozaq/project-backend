const Sequelize = require('sequelize');
const sequelize=require('../database');
const consultora = require('./consultora');
const persona = require('./persona');
const usuario = require('./usuario');

const Empresa = sequelize.define('empresa', {
    idEmpresa: {
        type: Sequelize.INTEGER(11),
        field: 'idEmpresa',
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
    tipoEmpresa: {
        type: Sequelize.TINYINT(1),
        field: 'tipoEmpresa',
        allowNull: false
    },
    actividad: {
        type: Sequelize.TINYINT(1),
        field: 'actividad',
        allowNull: false
    },
    regimen: {
        type: Sequelize.TINYINT(1),
        field: 'regimen',
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(45),
        field: 'email',
        allowNull: false
    },
    telefono: {
        type: Sequelize.INTEGER(11),
        field: 'telefono',
        allowNull: true
    },
    celular: {
        type: Sequelize.INTEGER(11),
        field: 'celular',
        allowNull: true
    },
    departamento: {
        type: Sequelize.STRING(10),
        field: 'departamento',
        allowNull: false
    },
    direccion: {
        type: Sequelize.STRING(100),
        field: 'direccion',
        allowNull: false
    },
    latitud: {
        type: Sequelize.FLOAT(8.6),
        field: 'latitud',
        allowNull: true
    },
    longitud: {
        type: Sequelize.FLOAT(8.6),
        field: 'longitud',
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
    },
    idPersona: {
        type: Sequelize.INTEGER(11),
        field: 'idPersona',
        rerefences: {
            model: persona,
            id: 'idPersona'
        },
        allowNull: false
    },
    idConsultora: {
        type: Sequelize.INTEGER(11),
        field: 'idConsultora',
        refences: {
            model: consultora,
            id: 'idConsultora'
        },
        allowNull: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});
module.exports = Empresa;