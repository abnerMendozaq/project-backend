const db = require('../database');
const bcrypt = require('bcryptjs');
const jwt = require('../services/jwt-service');
const mysql = require('mysql');
const request = require('request');
const server = 'https://google.com/recaptcha/api/siteverify';
const secret = '6Le_GrcUAAAAALXG71pjpHT2R9Eja0CXnaEGFtP7';
const table = ["usuario"];
let query = '';
userList = (req, res) => {
    query = 'SELECT * from ??';
    query = mysql.format(query, table);
    db.getConnectionDb((er, con) => {
        if (er) {
            return res.status(500).send({ error: er });
        }
        con.query(query, (error, result) => {
            con.release();
            if (error) {
                return res.status(404).send({ message: 'Error al recuperar datos' });
            }
            return res.status(200).send(result);
        });
    });
}
login = (req, res) => {
    let auth = req.body;
    if (auth.captcha === undefined || auth.captcha === null || auth.captcha === '') {
        return res.status(404).send('Seleccione Captcha');
    }
    const verifyCaptcha = `${server}?secret=${secret}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;
    request(verifyCaptcha, (err, response, body) => {
        body = JSON.parse(body);
        if (body.success != undefined && !body.success) {
            return res.status(500).send(err);
        }
        query = 'SELECT * from ?? WHERE nombreUsuario = ? AND estado=1';
        query = mysql.format(query, [table, auth.nombreUsuario]);
        db.getConnectionDb((er, con) => {
            if (er) {
                con.release();
                return res.status(500).send({ error: er });
            }
            con.query(query, (error, result) => {
                con.release();
                if (error) {
                    return res.status(404).send('Error al recuperar los datos');
                }
                if (result.length > 0) {
                    let check = bcrypt.compareSync(auth.password.trim(), result[0].password.trim());
                    if (check) {
                        if (auth.gettoken) {
                            result[0].password = undefined;
                            return res.status(200).send({
                                usuario: result[0],
                                token: jwt.encodeToken(result[0])
                            });
                        }
                    } else {
                        return res.status(404).send('Contraseña Incorrecta');
                    }
                } else {
                    return res.status(404).send('Usuario Incorrecto');
                }
            });
        });
    });
}
getOne = (req, res) => {
    let idUsuario = req.body;
    query = 'SELECT * from ?? WHERE ?';
    query = mysql.format(query, [table, idUsuario]);
    db.getConnectionDb((er, con) => {
        if (er) {
            return res.status(500).send({ error: er });
        }
        con.query(query, (error, result) => {
            con.release();
            if (error) {
                return res.status(404).send({ message: 'Error al recuperar datos' });
            }
            if (result.length == 0) {
                return res.status(403).send({ message: 'No existe el usuario' });
            }
            result[0].password = undefined;
            return res.status(200).send(result[0]);
        });
    });
}
createUser = (req, res) => {
    let usuario = req.body;
    query = 'SELECT * from ?? WHERE nombreUsuario = ?';
    query = mysql.format(query, [table, usuario.nombreUsuario]);
    db.getConnectionDb((er, con) => {
        if (er) {
            return res.status(500).send({ error: er });
        }
        con.query(query, (error, result) => {
            con.release();
            if (error) {
                return res.status(404).send({ message: 'Error al recuperar los datos' });
            }
            if (result.length > 0) {
                return res.status(403).send({ message: 'El usuario existe' });
            }
            bcrypt.hash(req.body.password, 10, (error, hash) => {
                usuario.password = hash;
                query = 'INSERT INTO ?? set ?';
                query = mysql.format(query, [table, usuario]);
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send({ message: 'Error al realizar la transaccion de usuario' });
                    }
                    return res.status(200).send(result);
                });
            });
        });
    })
}
getUserExist = (req, res) => {
    let usuario = req.body;
    query = "SELECT idUsuario FROM ?? WHERE ?";
    query = mysql.format(query, [table, usuario]);
    db.getConnectionDb((er, con) => {
        if (er) {
            return res.status(500).send({ error: er });
        }
        con.query(query, (error, result) => {
            con.release();
            if (error) {
                return res.status(404).send(error);
            }
            return res.status(200).send(result[0]);
        });
    });

}
modifyUser = (req, res) => {
    let id = req.params.id;
    let usuario = req.body;
    query = 'SELECT * from ?? WHERE nombreUsuario = ?';
    query = mysql.format(query, [table, usuario.nombreUsuario]);
    db.getConnectionDb((er, con) => {
        if (er) {
            res.status(500).send({ error: er });
        }
        con.query(query, (error, result) => {
            con.release();
            if (error) {
                return res.status(404).send({ message: 'Error al recuperar los datos' });
            }
            if (result.length > 0) {
                return res.status(403).send({ message: 'El usuario existe' });
            }
            bcrypt.hash(req.body.password, 10, (error, hash) => {
                usuario.password = hash;
                query = 'UPDATE ?? SET ? WHERE idUsuario=?';
                query = mysql.format(query, [table, usuario, id]);
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send({ message: 'Error al modificar los datos del usuario' });
                    }
                    return res.status(200).send(result);
                });
            });
        });
    });
}
deleteUser = (req, res) => {
    let id = req.body;
    query = 'UPDATE ?? SET estado=0 WHERE ?';
    query = mysql.format(query, [table, id]);
    db.getConnectionDb((er, con) => {
        if (er) {
            res.status(500).send({ error: er });
        }
        con.query(query, (err, result) => {
            con.release();
            if (err) {
                return res.status(500).send({ message: 'Error al modificar los datos del usuario' });
            }
            return res.status(200).send(result);
        });
    });

}
module.exports = {
    userList,
    login,
    getOne,
    modifyUser,
    createUser,
    deleteUser,
    getUserExist
};