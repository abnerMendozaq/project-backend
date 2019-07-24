const pool = require('../database');
const bcrypt = require('bcrypt');
const db = pool();
createUserCompany = (req, res) => {
    var persona = req.body[0];
    var usuario = req.body[1];
    var empresa = req.body[2];
    db.query('SELECT * from persona WHERE ci=?', persona.ci, (error, result) => {
        console.log(error);
        if (error) {
            return res.status(404).send({ message: 'Error al recuperar los datos de la persona' });
        }
        if (result != undefined && result.length > 0) {
            return res.status(403).send({ message: 'La persona ya existe' });
        } else {
            db.query('SELECT * from usuario WHERE nombreUsuario=?', usuario.nombreUsuario, (error, result) => {
                if (error) {
                    return res.status(404).send({ message: 'Error al recuperar los datos del usuario' });
                }
                if (result != undefined && result.length > 0) {
                    return res.status(403).send({ message: 'El usuario existe' });
                } else {
                    db.query('SELECT * from empresa WHERE nit=?', empresa.nit, (error, result) => {
                        if (error) {
                            return res.status(404).send({ message: 'Error al recuperar los datos de la empresa' });
                        }
                        if (result != undefined && result.length > 0) {
                            return res.status(403).send({ message: 'La empresa ya esta registrada' });
                        } else {
                            try {
                                db.beginTransaction((err) => {
                                    if (err) { return res.status(500).send({ message: 'Internal Server' }); }
                                    console.log(err);
                                    db.query('INSERT INTO persona set ?', persona, (err, result) => {
                                        if (err) {
                                            db.rollback(() => { return res.status(500).send({ message: 'Error al realizar la transaccion de persona' }) });
                                        }
                                        consultora.idPersona = result.insertId;
                                        db.query('INSERT INTO empresa set ?', empresa, (err, result) => {
                                            if (err) {
                                                db.rollback(() => { return res.status(500).send({ message: 'Error al realizar la transaccion de consultora' }) });
                                            }
                                            usuario.idEmpresa = result.insertId;
                                            bcrypt.hash(req.body[1].password, 10, (error, hash) => {
                                                usuario.password = hash;
                                                db.query('INSERT INTO usuario set ?', usuario, (err, result) => {
                                                    if (err) {
                                                        db.rollback(() => { return res.status(500).send({ message: 'Error al realizar la transaccion de usuario' }) });
                                                    }
                                                    db.commit();
                                                    db.end();
                                                    return res.status(200).send(result);
                                                });
                                            });
                                        });

                                    });
                                });
                            } catch (error) {
                                db.end();
                                return res.status(500).send({ message: `Error al realizar la transaccion ${error}` });
                            }
                        }
                    });
                }
            });
        }
    });
}
createUserConsultant = (req, res) => {
    var persona = req.body[0];
    var usuario = req.body[1];
    var consultora = req.body[2];
    db.query('SELECT * from persona WHERE ci=?', persona.ci, (error, result) => {
        if (error) {
            return res.status(404).send({ message: 'Error al recuperar los datos' });
        }
        if (result != undefined && result.length > 0) {
            return res.status(403).send({ message: 'La persona ya existe' });
        } else {
            db.query('SELECT * from usuario WHERE nombreUsuario=?', usuario.nombreUsuario, (error, result) => {
                if (error) {
                    return res.status(404).send({ message: 'Error al recuperar los datos' });
                }
                if (result != undefined && result.length > 0) {
                    return res.status(403).send({ message: 'El usuario existe' });
                } else {
                    db.query('SELECT * from consultora WHERE nroColegiado=?', consultora.nroColegiado, (error, result) => {
                        if (error) {
                            return res.status(404).send({ message: 'Error al recuperar los datos' });
                        }
                        if (result != undefined && result.length > 0) {
                            return res.status(403).send({ message: 'La consultora ya esta registrada' });
                        } else {
                            try {
                                db.beginTransaction((err) => {
                                    if (err) { return res.status(500).send({ message: 'Internal Server' }); }
                                    db.query('INSERT INTO persona set ?', persona, (err, result) => {
                                        if (err) {
                                            db.rollback(() => { return res.status(500).send({ message: 'Error al realizar la transaccion de persona' }) });
                                        }
                                        usuario.idPersona = result.insertId;
                                        consultora.idPersona = result.insertId;
                                        db.query('INSERT INTO consultora set ?', consultora, (err, result) => {
                                            if (err) {
                                                db.rollback(() => { return res.status(500).send({ message: 'Error al realizar la transaccion de consultora' }) });
                                            }
                                            usuario.idConsultora = result.insertId;
                                            bcrypt.hash(req.body[1].password, 10, (error, hash) => {
                                                usuario.password = hash;
                                                db.query('INSERT INTO usuario set ?', usuario, (err, result) => {
                                                    if (err) {
                                                        db.rollback(() => { return res.status(500).send({ message: 'Error al realizar la transaccion de usuario' }) });
                                                    }
                                                    db.commit();
                                                    db.end();
                                                    return res.status(200).send(result);
                                                });

                                            });

                                        });

                                    });
                                });
                            } catch (error) {
                                db.end();
                                res.status(500).send({ message: `Error al realizar la transaccion ${error}` });
                            }
                        }
                    });
                }
            });
        }
    });
}
module.exports = {
    createUserCompany,
    createUserConsultant
};