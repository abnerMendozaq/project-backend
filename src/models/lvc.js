const Sequelize = require('sequelize');
const sequelize = require('../database');
const empresa = require('./empresa');

const Lvc = sequelize.define('lvc', {
    idLvc: {
        type: Sequelize.INTEGER(11),
        field: 'idLvc',
        autoIncrement: true,
        primaryKey: true
    },
    rectificado: {
        type: Sequelize.TINYINT(1),
        field: 'rectificado',
        allowNull: false,
        defaultValue: 0,
        unique: true
    },
    fechaDeclaracion: {
        type: Sequelize.DATE,
        field: 'fechaDeclaracion',
        allowNull: false
    },
    periodo: {
        type: Sequelize.DATE,
        field: 'periodo',
        allowNull: false
    },
    nroRegistroVentas: {
        type: Sequelize.TINYINT(3),
        field: 'nroRegistroVentas',
        allowNull: false,
        unique: true
    },
    nroRegistroCompras: {
        type: Sequelize.TINYINT(3),
        field: 'nroRegistroCompras',
        allowNull: false,
        unique: true
    },
    ventas13: {
        type: Sequelize.DECIMAL(18.2),
        field: 'ventas13',
        allowNull: false,
        unique: true
    },
    exportacionesExenciones14: {
        type: Sequelize.DECIMAL(18.2),
        field: 'exportacionesExenciones14',
        allowNull: false,
        unique: true
    },
    tasaCero15: {
        type: Sequelize.DECIMAL(18.2),
        field: 'tasaCero15',
        allowNull: false,
        unique: true
    },
    devolucionVentas17: {
        type: Sequelize.DECIMAL(18.2),
        field: 'devolucionVentas17',
        allowNull: false,
        unique: true
    },
    descuentosCompras18: {
        type: Sequelize.DECIMAL(18.2),
        field: 'descuentosCompras18',
        allowNull: false,
        unique: true
    },
    dfActualizadoReintegros55: {
        type: Sequelize.DECIMAL(18.2),
        field: 'dfActualizadoReintegros55',
        allowNull: false,
        unique: true
    },
    compras11: {
        type: Sequelize.DECIMAL(18.2),
        field: 'compras11',
        allowNull: false,
        unique: true
    },
    vinculadas26: {
        type: Sequelize.DECIMAL(18.2),
        field: 'vinculadas26',
        allowNull: false,
        unique: true
    },
    noVinculadas31: {
        type: Sequelize.DECIMAL(18.2),
        field: 'noVinculadas31',
        allowNull: false,
        unique: true
    },
    devolucionesCompras27: {
        type: Sequelize.DECIMAL(18, 2),
        field: 'devolucionesCompras27',
        allowNull: false,
        unique: true
    },
    descuentoCompras28: {
        type: Sequelize.DECIMAL(18.2),
        field: 'descuentoCompras28',
        allowNull: false,
        unique: true
    },
    idEmpresa: {
        type: Sequelize.INTEGER(11),
        field: 'idEmpresa',
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
module.exports = Lvc;