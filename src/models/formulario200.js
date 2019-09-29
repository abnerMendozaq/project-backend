const Sequelize = require('sequelize');
const sequelize = require('../database');

const Formulario200 = sequelize.define('formulario200', {
    idFormulario200: {
        type: Sequelize.INTEGER(11),
        field: 'idFormulario200',
        autoIncrement: true,
        primaryKey: true
    },
    ventasNoGravadas505: {
        type: Sequelize.DECIMAL(18.2),
        field: 'ventasNoGravadas505',
        allowNull: false,
        unique: true
    },
    retirosConsumos16: {
        type: Sequelize.DECIMAL(18.2),
        field: 'retirosConsumos16',
        allowNull: false,
        unique: true
    },
    debitoFiscalParcial39: {
        type: Sequelize.DECIMAL(18, 2),
        field: 'debitoFiscalParcial39',
        allowNull: false,
        unique: true
    },
    debitoFiscalPeriodo1002: {
        type: Sequelize.DECIMAL(18.2),
        field: 'debitoFiscalPeriodo1002',
        allowNull: false,
        unique: true
    },
    creditoFicalParcial114: {
        type: Sequelize.DECIMAL(18.2),
        field: 'creditoFicalParcial114',
        allowNull: false,
        unique: true
    },
    creditoFiscalProporcional1003: {
        type: Sequelize.DECIMAL(18.2),
        field: 'creditoFiscalProporcional1003',
        allowNull: true,
        unique: true
    },
    creditoFicalPeriodo1004: {
        type: Sequelize.DECIMAL(18.2),
        field: 'creditoFicalPeriodo1004',
        allowNull: false,
        unique: true
    },
    diferenciaFavorContribuyente693: {
        type: Sequelize.DECIMAL(18.2),
        field: 'diferenciaFavorContribuyente693',
        allowNull: false,
        unique: true
    },
    diferenciaFavorFisco909: {
        type: Sequelize.DECIMAL(18.2),
        field: 'diferenciaFavorFisco909',
        allowNull: false,
        unique: true
    },
    saldoIva635: {
        type: Sequelize.DECIMAL(18.2),
        field: 'saldoIva635',
        allowNull: false,
        unique: true
    },
    actualizacionSaldoIva648: {
        type: Sequelize.DECIMAL(18.2),
        field: 'actualizacionSaldoIva648',
        allowNull: false,
        unique: true
    },
    impuestoDeterminadoFisco1001: {
        type: Sequelize.DECIMAL(18.2),
        field: 'impuestoDeterminadoFisco1001',
        allowNull: false,
        unique: true
    },
    pagoCuentaPerido622: {
        type: Sequelize.DECIMAL(18.2),
        field: 'pagoCuentaPerido622',
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
        type: Sequelize.DECIMAL(18, 2),
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
    multaRectificatoria967: {
        type: Sequelize.DECIMAL(18.2),
        field: 'multaRectificatoria967',
        allowNull: false,
        unique: true
    },
    totalDeudaTributaria955: {
        type: Sequelize.DECIMAL(18.2),
        field: 'totalDeudaTributaria955',
        allowNull: false,
        unique: true
    },
    saldoDefinitivoContribuyente592: {
        type: Sequelize.DECIMAL(18.2),
        field: 'saldoDefinitivoContribuyente592',
        allowNull: false,
        unique: true
    },
    saldoPagoCuenta747: {
        type: Sequelize.DECIMAL(18.2),
        field: 'saldoPagoCuenta747',
        allowNull: false
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
    permutaVentaBienesSevicios580: {
        type: Sequelize.DECIMAL(18.2),
        field: 'permutaVentaBienesSevicios580',
        allowNull: true
    },
    permutaCompraBienesSevicios581: {
        type: Sequelize.DECIMAL(18.2),
        field: 'permutaCompraBienesSevicios581',
        allowNull: true
    },
    saldoIvaPorPagar: {
        type: Sequelize.DECIMAL(18.2),
        field: 'saldoIvaPorPagar',
        allowNull: false,
        unique: true
    },
    nroOrden: {
        type: Sequelize.BIGINT(20),
        field: 'nroOrden',
        allowNull: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});
module.exports = Formulario200;