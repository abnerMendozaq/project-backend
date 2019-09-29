const Sequelize = require('sequelize');
const sequelize = require('../database');

const Formulario400 = sequelize.define('formulario400', {
    idFormulario400: {
        type: Sequelize.INTEGER(11),
        field: 'idFormulario400',
        autoIncrement: true,
        primaryKey: true
    },
    ingresosExentos32: {
        type: Sequelize.DECIMAL(18.2),
        field: 'ingresosExentos32',
        allowNull: false,
        unique: true
    },
    baseImponible24: {
        type: Sequelize.DECIMAL(18.2),
        field: 'baseImponible24',
        allowNull: false,
        unique: true
    },
    impuestoDeterminado909: {
        type: Sequelize.DECIMAL(18, 2),
        field: 'impuestoDeterminado909',
        allowNull: false,
        unique: true
    },
    saldoIue664: {
        type: Sequelize.DECIMAL(18.2),
        field: 'saldoIue664',
        allowNull: false,
        unique: true
    },
    impuestoDeterminadoFisco1001: {
        type: Sequelize.DECIMAL(18.2),
        field: 'impuestoDeterminadoFisco1001',
        allowNull: false,
        unique: true
    },
    pagoCuentaPerido662: {
        type: Sequelize.DECIMAL(18.2),
        field: 'pagoCuentaPerido662',
        allowNull: false,
        unique: true
    },
    pagoCuentaPeridoAnterior640: {
        type: Sequelize.DECIMAL(18.2),
        field: 'pagoCuentaPeridoAnterior640',
        allowNull: false,
        unique: true
    },
    saldoPagoCuenta643: {
        type: Sequelize.DECIMAL(18.2),
        field: 'saldoPagoCuenta643',
        allowNull: false,
        unique: true
    },
    saldoFavorFisco996: {
        type: Sequelize.DECIMAL(18.2),
        field: 'saldoFavorFisco996',
        allowNull: false,
        unique: true
    },
    tributoOmitido924: {
        type: Sequelize.DECIMAL(18.2),
        field: 'tributoOmitido924',
        allowNull: false,
        unique: true
    },
    actualizacionTributoOmitido925: {
        type: Sequelize.DECIMAL(18.2),
        field: 'actualizacionTributoOmitido925',
        allowNull: false,
        unique: true
    },
    interes938: {
        type: Sequelize.DECIMAL(18.2),
        field: 'interes938',
        allowNull: false,
        unique: true
    },
    midfFueraPlazo954: {
        type: Sequelize.DECIMAL(18.2),
        field: 'midfFueraPlazo954',
        allowNull: false,
        unique: true
    },
    multaRectificatoria967: {
        type: Sequelize.DECIMAL(18.2),
        field: 'multaRectificatoria967',
        allowNull: false,
        unique: true
    },
    totalDeudaTributaria955: {
        type: Sequelize.DECIMAL(18, 2),
        field: 'totalDeudaTributaria955',
        allowNull: false,
        unique: true
    },
    saldoIueCompensar619: {
        type: Sequelize.DECIMAL(18.2),
        field: 'saldoIueCompensar619',
        allowNull: false,
        unique: true
    },
    saldoPagoCuenta747: {
        type: Sequelize.DECIMAL(18.2),
        field: 'saldoPagoCuenta747',
        allowNull: false,
        unique: true
    },
    saldoDefinitivoFisco646: {
        type: Sequelize.DECIMAL(18.2),
        field: 'saldoDefinitivoFisco646',
        allowNull: false,
        unique: true
    },
    pagoValores677: {
        type: Sequelize.DECIMAL(18.2),
        field: 'pagoValores677',
        allowNull: false,
        unique: true
    },
    pagoEfectivo576: {
        type: Sequelize.DECIMAL(18.2),
        field: 'pagoEfectivo576',
        allowNull: false,
        unique: true
    },
    saldoItPorPagar: {
        type: Sequelize.DECIMAL(18.2),
        field: 'saldoItPorPagar',
        allowNull: false,
        unique: true
    },
    nroOrden: {
        type: Sequelize.BIGINT(20),
        field: 'nroOrden',
        allowNull: true,
        unique: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});
module.exports = Formulario400;