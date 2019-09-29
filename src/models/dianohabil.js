const Sequelize = require('sequelize');
const sequelize = require('../database');

const dianohabil = sequelize.define('dianohabil', {
    idDiaNoHabil: {
        type: Sequelize.INTEGER(11),
        field: 'idDiaNoHabil',
        autoIncrement: true,
        primaryKey: true
    },
    fecha: {
        type: Sequelize.DATEONLY,
        field: 'fecha',
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING(50),
        field: 'descripcion',
        allowNull: false
    },
    localidad: {
        type: Sequelize.STRING(20),
        field: 'localidad',
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});
module.exports = dianohabil;