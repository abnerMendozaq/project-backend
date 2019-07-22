const pool = require('../database');
const bcrypt = require('bcrypt');
const db = pool();
createUserCompany = (req, res) => {
    var persona = req.body[0];
    var usuario = req.body[1];
    var empresa = req.body[2];
    db.query('SELECT * from persona WHERE ci=?', persona.ci, (error, result) => {
        if (error) {
            res.status(404).send({ message: 'Error al recuperar los datos' });
        }
        if (result.length > 0) {
            res.status(403).send({ message: 'La persona ya existe' });
        } else {
            db.query('SELECT * from usuario WHERE nombreUsuario=?', usuario.nombreUsuario, (error, result) => {
                if (error) {
                    res.status(404).send({ message: 'Error al recuperar los datos' });
                }
                if (result.length > 0) {
                    res.status(403).send({ message: 'El usuario existe' });
                } else {
                    db.query('SELECT * from empresa WHERE nit=?', empresa.nit, (error, result) => {
                        if (error) {
                            res.status(404).send({ message: 'Error al recuperar los datos' });
                        }
                        if (result.length > 0) {
                            res.status(403).send({ message: 'La empresa ya esta registrada' });
                        } else {
                            try {
                                db.beginTransaction((err) => {
                                    if (err) { res.status(500).send({ message: 'Internal Server' }); }
                                    db.query('INSERT INTO persona set ?', persona, (err, result) => {
                                        if (err) {
                                            db.rollback(() => res.status(500).send({ message: 'Error al realizar la transaccion de persona' }));
                                        }
                                        usuario.idPersona = result.insertId;
                                        consultora.idPersona = result.insertId;
                                        db.query('INSERT INTO empresa set ?', empresa, (err, result) => {
                                            if (err) {
                                                db.rollback(() => res.status(500).send({ message: 'Error al realizar la transaccion de consultora' }));
                                            }
                                            usuario.idEmpresa = result.insertId;
                                            bcrypt.hash(req.body[1].password, 10, (error, hash) => {
                                                usuario.password = hash;
                                                db.query('INSERT INTO usuario set ?', usuario, (err, result) => {
                                                    if (err) {
                                                        db.rollback(() => res.status(500).send({ message: 'Error al realizar la transaccion de usuario' }));
                                                    }
                                                    res.status(200).send(result);
                                                    db.commit();
                                                    db.end();
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
createUserConsultant = (req, res) => {
    var persona = req.body[0];
    var usuario = req.body[1];
    var consultora = req.body[2];
    db.query('SELECT * from persona WHERE ci=?', persona.ci, (error, result) => {
        if (error) {
            res.status(404).send({ message: 'Error al recuperar los datos' });
        }
        if (result.length > 0) {
            res.status(403).send({ message: 'La persona ya existe' });
        } else {
            db.query('SELECT * from usuario WHERE nombreUsuario=?', usuario.nombreUsuario, (error, result) => {
                if (error) {
                    res.status(404).send({ message: 'Error al recuperar los datos' });
                }
                if (result.length > 0) {
                    res.status(403).send({ message: 'El usuario existe' });
                } else {
                    db.query('SELECT * from consultora WHERE nroColegiado=?', consultora.nroColegiado, (error, result) => {
                        if (error) {
                            res.status(404).send({ message: 'Error al recuperar los datos' });
                        }
                        if (result.length > 0) {
                            res.status(403).send({ message: 'La consultora ya esta registrada' });
                        } else {
                            try {
                                db.beginTransaction((err) => {
                                    if (err) { res.status(500).send({ message: 'Internal Server' }); }
                                    db.query('INSERT INTO persona set ?', persona, (err, result) => {
                                        if (err) {
                                            db.rollback(() => res.status(500).send({ message: 'Error al realizar la transaccion de persona' }));
                                        }
                                        usuario.idPersona = result.insertId;
                                        consultora.idPersona = result.insertId;
                                        db.query('INSERT INTO consultora set ?', consultora, (err, result) => {
                                            if (err) {
                                                db.rollback(() => res.status(500).send({ message: 'Error al realizar la transaccion de consultora' }));
                                            }
                                            usuario.idConsultora = result.insertId;
                                            bcrypt.hash(req.body[1].password, 10, (error, hash) => {
                                                usuario.password = hash;
                                                db.query('INSERT INTO usuario set ?', usuario, (err, result) => {
                                                    if (err) {
                                                        db.rollback(() => res.status(500).send({ message: 'Error al realizar la transaccion de usuario' }));
                                                    }
                                                    res.status(200).send(result);
                                                    db.commit();
                                                    db.end();
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