const _ = require('lodash');
const bcrypt = require('bcryptjs');
const db = require('../database');
const usuarioModel = require('../models/usuario');
const personaModel = require('../models/persona');
const consultoraModel = require('../models/consultora');
const empresaModel = require('../models/empresa');
const lvcModel = require('../models/lvc');
const formulario200Model = require('../models/formulario200');
const formulario400Model = require('../models/formulario400');
const saldoModel = require('../models/saldo');
const constants = require('../utils/constants')
const Controller = {};

Controller.createUserCompany = async (req, res) => {
    let persona = req.body[0];
    let usuario = req.body[1];
    let empresa = req.body[2];
    let saldos = req.body[3];
    const transaction = await db.transaction();
    try {
        // step 1
        let person = await personaModel.create(persona, { transaction });
        // step 2
        empresa.idPersona = person.idPersona;
        let company = await empresaModel.create(empresa, { transaction });
        // step 3
        _.each(saldos, s => { s.idEmpresa = company.idEmpresa });
        await saldoModel.bulkCreate(saldos, { transaction });
        // step 4
        usuario.idPersona = person.idPersona;
        usuario.password = bcrypt.hashSync(usuario.password, 10);
        await usuarioModel.create(usuario, { transaction });
        // commit
        await transaction.commit();
        return res.status(200).json(`success`);
    } catch (err) {
        // Rollback transaction if any errors were encountered
        await transaction.rollback();
        return res.status(500).json(`${constants.SERVER_500} ${err.message}`);
    }
}
Controller.createUserConsultant = async (req, res) => {
    let persona = req.body[0];
    let usuario = req.body[1];
    let consultora = req.body[2];
    const transaction = await db.transaction();
    try {
        // step 1
        let person = await personaModel.create(persona, { transaction });
        // step 2
        usuario.idPersona = person.idPersona;
        usuario.password = bcrypt.hashSync(usuario.password, 10);
        await usuarioModel.create(usuario, { transaction });
        //step 3
        consultora.idPersona = person.idPersona;
        await consultoraModel.create(consultora, { transaction });
        // commit
        await transaction.commit();
        return res.status(200).json(`success`);
    } catch (err) {
        // Rollback transaction if any errors were encountered
        await transaction.rollback();
        return res.status(500).json(`${constants.SERVER_500} ${err.message}`);
    }
}
Controller.createLvcForm200Form400 = async (req, res) => {
    let lvc = req.body[0];
    let form200 = req.body[1];
    let form400 = req.body[2];
    const transaction = await db.transaction();
    try {
        // step 1
        let lvcData = await lvcModel.create(lvc, { transaction });
        // step 2
        form200.idFormulario200 = lvcData.idLvc;
        await formulario200Model.create(form200, { transaction });
        //step 3
        form400.idFormulario400 = lvcData.idLvc;
        await formulario400Model.create(form400, { transaction });
        // commit
        await transaction.commit();
        return res.status(200).json(`success`);
    } catch (err) {
        // Rollback transaction if any errors were encountered
        await transaction.rollback();
        return res.status(500).json(`${constants.SERVER_500} ${err.message}`);
    }
}

module.exports = Controller;