const db = require('../database');
const bcrypt = require('bcryptjs');
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
    let saldo = req.body[3];
    await db.transaction()
        .then((t) => {
            personaModel.create(persona, { transaction: t }
            ).then((person) => {
                empresa.idPersona = person.idPersona;
                usuario.idPersona = person.idPersona;
                return empresaModel.create(empresa, { transaction: t }
                ).then((company) => {
                    saldo.idEmpresa = company.idEmpresa;
                    return saldoModel.create(saldoModel, { transaction: t })
                        .then((balance) => {
                            usuario.password = bcrypt.hashSync(usuario.password, 10);
                            return usuarioModel.create(usuario, { transaction: t }
                            ).then(() => {
                                t.commit();
                                return res.status(200).json(constants.SUCCESS);
                            }).catch((err) => {
                                t.rollback();
                                return res.status(400).json(`${constants.ERROR} ${err.message}`);
                            });
                        }).catch((err) => {
                            t.rollback();
                            return res.status(400).json(`${constants.ERROR} ${err.message}`);
                        });
                }).catch((err) => {
                    return res.status(400).json(`${constants.ERROR} ${err.message}`);
                });
            }).catch((err) => {
                t.rollback();
                return res.status(400).json(`${constants.ERROR} ${err.message}`);
            });
        }).catch(err => {
            return res.status(500).json(`${constants.SERVER} ${err.message}`);
        });
}
Controller.createUserConsultant = async (req, res) => {
    let persona = req.body[0];
    let usuario = req.body[1];
    let consultora = req.body[2];
    await db.transaction()
        .then((t) => {
            return personaModel.create(persona, { transaction: t }
            ).then((person) => {
                consultora.idPersona = person.idPersona;
                usuario.idPersona = person.idPersona;
                return consultoraModel.create(consultora, { transaction: t }
                ).then((consultant) => {
                    usuario.password = bcrypt.hashSync(usuario.password, 10);
                    return usuarioModel.create(usuario, { transaction: t }
                    ).then(() => {
                        t.commit();
                        return res.status(200).json(constants.SUCCESS);
                    }).catch((err) => {
                        t.rollback();
                        return res.status(400).json(`${constants.ERROR} ${err.message}`);
                    });
                }).catch((err) => {
                    return res.status(400).json(`${constants.ERROR} ${err.message}`);
                });
            }).catch((err) => {
                t.rollback();
                return res.status(400).json(`${constants.ERROR} ${err.message}`);
            });
        }).catch(err => {
            return res.status(500).json(`${constants.SERVER} ${err.message}`);
        });
}
Controller.createLvcForm200Form400 = async (req, res) => {
    let lvc = req.body[0];
    let form200 = req.body[1];
    let form400 = req.body[2];
    await db.transaction()
        .then((t) => {
            lvcModel.create(lvc, { transaction: t }
            ).then((lvcData) => {
                form200.idFormulario200 = lvcData.idLvc;
                form400.idFormulario400 = lvcData.idLvc;
                return formulario200Model.create(form200, { transaction: t }
                ).then(() => {
                    return formulario400Model.create(form400, { transaction: t }
                    ).then(() => {
                        t.commit();
                        return res.status(200).json(constants.SUCCESS);
                    }).catch((err) => {
                        t.rollback();
                        return res.status(400).json(`${constants.ERROR} ${err.message}`);
                    });
                }).catch((err) => {
                    return res.status(400).json(`${constants.ERROR} ${err.message}`);
                });
            }).catch((err) => {
                t.rollback();
                return res.status(400).json(`${constants.ERROR} ${err.message}`);
            });
        }).catch(err => {
            return res.status(500).json(`${constants.SERVER} ${err.message}`);
        });
}

module.exports = Controller;