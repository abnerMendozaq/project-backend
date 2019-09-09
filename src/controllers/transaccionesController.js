const db = require('../database');
const bcrypt = require('bcryptjs');
const mysql = require('mysql');
let tableC = ["consultora"];
let tableE = ["empresa"];
let tableU = ["usuario"];
let tableP = ["persona"];
let tableL = ["lvc"];
let tableF2 = ["formulario200"];
let tableF4 = ["formulario400"];
let query = '';
createUserCompany = (req, res) => {
    var persona = req.body[0];
    var usuario = req.body[1];
    var empresa = req.body[2];
    query = 'SELECT * from ?? WHERE nit=?';
    query = mysql.format(query, [tableE, empresa.nit]);
    db.getConnectionDb((er, con) => {
        if (er) {
            return res.status(500).send({ error: er });
        }
        con.query(query, (error, result) => {
            if (error) {
                return res.status(404).send('Error al recuperar los datos de la empresa');
            }
            if (result != undefined && result.length > 0) {
                return res.status(403).send('La empresa ya esta registrada');
            } else {
                try {
                    con.beginTransaction((err) => {
                        if (err) { return res.status(500).send('Internal Server'); }
                        query = 'INSERT INTO ?? set ?';
                        query = mysql.format(query, [tableP, persona]);
                        con.query(query, (err, result) => {
                            if (err) {
                                con.rollback(() => {
                                    con.release();
                                    return res.status(500).send('Error al realizar la transaccion de persona');
                                });
                            }
                            empresa.idPersona = result.insertId;
                            query = 'INSERT INTO ?? set ?';
                            query = mysql.format(query, [tableE, empresa]);
                            con.query(query, (err, result) => {
                                if (err) {
                                    con.rollback(() => {
                                        con.release();
                                        return res.status(500).send('Error al realizar la transaccion de consultora');
                                    });
                                }
                                usuario.idEmpresa = result.insertId;
                                query = 'INSERT INTO ?? set ?';
                                usuario.password = bcrypt.hashSync(req.body[1].password, 10);
                                query = mysql.format(query, [tableU, usuario]);
                                con.query(query, (err, result) => {
                                    if (err) {
                                        con.rollback(() => {
                                            con.release();
                                            return res.status(500).send('Error al realizar la transaccion de usuario')
                                        });
                                    }
                                    con.commit();
                                    con.release();
                                    return res.status(200).send(result);
                                });
                            });
                        });
                    });
                } catch (error) {
                    con.release();
                    return res.status(500).send(`Error al realizar la transaccion ${error}`);
                }
            }
        });
    });
}
createUserConsultant = (req, res) => {
    var persona = req.body[0];
    var usuario = req.body[1];
    var consultora = req.body[2];
    query = 'SELECT * from ?? WHERE nroColegiado=?';
    query = mysql.format(query, [tableC, consultora.nroColegiado]);
    db.getConnectionDb((er, con) => {
        if (er) {
            return res.status(500).send({ error: er });
        }
        con.query(query, (error, result) => {
            if (error) {
                return res.status(404).send('Error al recuperar los datos de la consultora');
            }
            if (result != undefined && result.length > 0) {
                return res.status(403).send('La consultora ya esta registrada');
            } else {
                try {
                    con.beginTransaction((err) => {
                        if (err) { return res.status(500).send('Internal Server'); }
                        query = 'INSERT INTO ?? set ?';
                        query = mysql.format(query, [tableP, persona]);
                        con.query(query, (err, result) => {
                            if (err) {
                                con.rollback(() => {
                                    con.release();
                                    return res.status(500).send('Error al realizar la transaccion de persona');
                                });
                            }
                            consultora.idPersona = result.insertId;
                            query = 'INSERT INTO ?? set ?';
                            query = mysql.format(query, [tableC, consultora]);
                            con.query(query, (err, result) => {
                                if (err) {
                                    con.rollback(() => {
                                        con.release();
                                        return res.status(500).send('Error al realizar la transaccion de consultora');
                                    });
                                }
                                usuario.idConsultora = result.insertId;
                                query = 'INSERT INTO ?? set ?';
                                bcrypt.hash(req.body[1].password, 10, (error, hash) => {
                                    usuario.password = hash;
                                    query = mysql.format(query, [tableU, usuario]);
                                    con.query(query, (err, result) => {
                                        if (err) {
                                            con.rollback(() => {
                                                con.release();
                                                return res.status(500).send('Error al realizar la transaccion de usuario');
                                            });
                                        }
                                        con.commit();
                                        con.release();
                                        return res.status(200).send(result);
                                    });
                                });
                            });
                        });
                    });
                } catch (error) {
                    con.release();
                    return res.status(500).send(`Error al realizar la transaccion ${error}`);
                }
            }
        });
    });
}
createLvcForm200Form400 = (req, res) => {
    var lvc = req.body[0];
    var form200 = req.body[1];
    var form400 = req.body[2];
    db.getConnectionDb((er, con) => {
        if (er) {
            return res.status(500).send({ error: er });
        }
        try {
            con.beginTransaction((err) => {
                if (err) { return res.status(500).send('Internal Server'); }
                query = 'INSERT INTO ?? set ?';
                query = mysql.format(query, [tableL, lvc]);
                con.query(query, (err, result) => {
                    if (err) {
                        con.rollback(() => {
                            con.release();
                            return res.status(500).send('Error al realizar la transaccion del lvc');
                        });
                    }
                    if (result != undefined) {
                        form200.idFormulario200 = result.insertId;
                        form400.idFormulario400 = result.insertId;
                        query = 'INSERT INTO ?? set ?';
                        query = mysql.format(query, [tableF2, form200]);
                        con.query(query, (err, result) => {
                            if (err) {
                                con.rollback(() => {
                                    con.release();
                                    return res.status(500).send('Error al realizar la transaccion del form 200');
                                });
                            }
                            query = 'INSERT INTO ?? set ?';
                            query = mysql.format(query, [tableF4, form400]);
                            con.query(query, (err, result) => {
                                if (err) {
                                    con.rollback(() => {
                                        con.release();
                                        return res.status(500).send('Error al realizar la transaccion del form 400');
                                    });
                                }
                                con.commit();
                                con.release();
                                return res.status(200).send(result);
                            });
                        });
                    } else {
                        return res.status(500).send('ocurrio un error al realizar la transaccion');
                    }
                });
            });
        } catch (error) {
            con.release();
            return res.send(error);
        }
    });
}
module.exports = {
    createUserCompany,
    createUserConsultant,
    createLvcForm200Form400
};