const Sequelize = require('sequelize');
const sequelize = require('../database');
const formulario200 = require('./formulario200');
const formulario400 = require('./formulario400');

const Formulario1000 = sequelize.define('formulario1000', {
    idFormulario1000: {
        type: Sequelize.INTEGER(11),
        field: 'idFormulario1000',
        autoIncrement: true,
        primaryKey: true
    },
    nit: {
        type: Sequelize.BIGINT(20),
        field: 'nit',
        allowNull: false,
        unique: true
    },
    mes: {
        type: Sequelize.DATE,
        field: 'mes',
        allowNull: false
    },
    anio: {
        type: Sequelize.DATE,
        field: 'anio',
        allowNull: false
    },
    fechaPago: {
        type: Sequelize.DATE,
        field: 'fechaPago',
        allowNull: false
    },
    operacion1: {
        type: Sequelize.TINYINT(3),
        field: 'operacion1',
        allowNull: false,
        unique: true
    },
    codigoImpuesto8: {
        type: Sequelize.TINYINT(3),
        field: 'codigoImpuesto8',
        allowNull: true,
        unique: true
    },
    codigoFormulario17: {
        type: Sequelize.TINYINT(3),
        field: 'codigoFormulario17',
        allowNull: false,
        unique: true
    },
    nroOrdenDocumentoPagar12: {
        type: Sequelize.BIGINT(20),
        field: 'nroOrdenDocumentoPagar12',
        allowNull: false,
        unique: true
    },
    cargo18: {
        type: Sequelize.INTEGER(10),
        field: 'cargo18',
        allowNull: false,
        unique: true
    },
    numeroCuota14: {
        type: Sequelize.INTEGER(10),
        field: 'numeroCuota14',
        allowNull: false,
        unique: true
    },
    importeDeuda909: {
        type: Sequelize.DECIMAL(18.2),
        field: 'importeDeuda909',
        allowNull: false
    },
    mantenimientoValor925: {
        type: Sequelize.DECIMAL(18.2),
        field: 'mantenimientoValor925',
        allowNull: false,
        unique: true
    },
    intereses938: {
        type: Sequelize.DECIMAL(18.2),
        field: 'intereses938',
        allowNull: false,
        unique: true
    },
    midfFueraPlazo954: {
        type: Sequelize.DECIMAL(18.2),
        field: 'midfFueraPlazo954',
        allowNull: false,
        unique: true
    },
    midfRectificatoria967: {
        type: Sequelize.DECIMAL(18, 2),
        field: 'midfRectificatoria967',
        allowNull: false,
        unique: true
    },
    sancionOmision942: {
        type: Sequelize.DECIMAL(18.2),
        field: 'sancionOmision942',
        allowNull: false
    },
    total996: {
        type: Sequelize.DECIMAL(18.2),
        field: 'total996',
        allowNull: false
    },
    pagoEfectivo576: {
        type: Sequelize.DECIMAL(18.2),
        field: 'pagoEfectivo576',
        allowNull: false,
        unique: true
    },
    idFormulario200: {
        type: Sequelize.INTEGER(11),
        field: 'idFormulario200',
        allowNull: true,
        refences: {
            model: formulario200,
            id: 'idFormulario200'
        },
    },
    idFormulario400: {
        type: Sequelize.INTEGER(11),
        field: 'idFormulario400',
        allowNull: true,
        refences: {
            model: formulario400,
            id: 'idFormulario400'
        },
    }
}, {
    freezeTableName: true,
    timestamps: false
});
module.exports = Formulario1000;