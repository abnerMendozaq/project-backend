const Sequelize = require('sequelize');
const sequelize = require('../database');
const usuario = require('./usuario');

const Persona = sequelize.define('persona', {
    idPersona: {
        type: Sequelize.INTEGER(11),
        field: 'idPersona',
        autoIncrement: true,
        primaryKey: true
    },
    ci: {
        type: Sequelize.STRING(13),
        field: 'ci',
        unique: true,
        allowNull: false
    },
    primerApellido: {
        type: Sequelize.STRING(20),
        field: 'primerApellido',
        allowNull: false
    },
    segundoApellido: {
        type: Sequelize.STRING(20),
        field: 'segundoApellido',
        allowNull: true
    },
    nombres: {
        type: Sequelize.STRING(45),
        field: 'nombres',
        allowNull: false
    },
    sexo: {
        type: Sequelize.CHAR(1),
        field: 'sexo',
        allowNull: false
    },
    lugarNacimiento: {
        type: Sequelize.STRING(20),
        field: 'lugarNacimiento',
        allowNull: false
    },
    fechaNacimiento: {
        type: Sequelize.DATEONLY,
        field: 'fechaNacimiento',
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
module.exports = Persona;