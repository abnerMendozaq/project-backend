const pool = require('../database');
const bcrypt = require('bcrypt');
const jwt = require('../services/jwt-service')
const db = pool();
userList = (req, res) => {
    db.query('SELECT * from usuario', (error, result) => {
        if (error) {
            res.status(404).send({ message: 'Error al recuperar datos' });
        }
        res.status(200).send(result);
    });
}
login = (req, res) => {
    let params = req.body;
    let usuario = params.nombreUsuario;
    let password = params.password;
    db.query('SELECT * FROM usuario WHERE nombreUsuario = ? AND estado=1', usuario, (error, result) => {
        if (error) {
            res.status(404).send({ message: 'Error al recuperar los datos' });
        }
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (check) => {
                if (!check) {
                    if (params.gettoken) {
                        res.status(200).send({ token: jwt.encodeToken(result[0]) });
                    } else {
                        result[0].password = undefined;
                        res.status(200).send(result[0]);
                    }
                } else {
                    return res.status(404).send({ message: 'El usuario no se ha podido identificar' });
                }

            })
        } else {
            return res.status(404).send({ message: 'El usuario no se ha podido identificar' });
        }
    });
}
getOne = (req, res) => {
    let idUsuario = req.params.id;
    db.query('SELECT * from usuario WHERE idUsuario=?', idUsuario, (error, result) => {
        if (error) {
            res.status(404).send({ message: 'Error al recuperar datos' });
        }
        if (result.length == 0) {
            res.status(403).send({ message: 'No existe el usuario' });
        }
        res.status(200).send(result[0]);
    });
}
createUser = (req, res) => {
    let usuario = req.body;
    db.query('SELECT * from usuario WHERE nombreUsuario=?', usuario.nombreUsuario, (error, result) => {
        if (error) {
            res.status(404).send({ message: 'Error al recuperar los datos' });
        }
        if (result.length > 0) {
            res.status(403).send({ message: 'El usuario existe' });
        }
        bcrypt.hash(req.body[1].password, 10, (error, hash) => {
            usuario.password = hash;
            db.query('INSERT INTO usuario set ?', usuario, (err, result) => {
                if (err) {
                    res.status(500).send({ message: 'Error al realizar la transaccion de usuario' });
                }
                res.status(200).send(result);
            });
        });
    });
}
modifyUser = (req, res) => {
    let id = req.params.id;
    let usuario = req.body;
    if (id != req.usuario.idUsuario) {
        return res.status(500).send({ message: 'No tienes permiso para modificar' })
    }
    db.query('SELECT * from usuario WHERE nombreUsuario=?', usuario.nombreUsuario, (error, result) => {
        if (error) {
            res.status(404).send({ message: 'Error al recuperar los datos' });
        }
        if (result.length > 0) {
            res.status(403).send({ message: 'El usuario existe' });
        }
        bcrypt.hash(req.body.password, 10, (error, hash) => {
            usuario.password = hash;
            db.query('UPDATE usuario SET ? WHERE idUsuario=?', [usuario, id], (err, result) => {
                if (err) {
                    res.status(500).send({ message: 'Error al modificar los datos del usuario' });
                }
                res.status(200).send(result);
            });
        });
    });
}
deleteUser = (req, res) => {
    let id = req.params.id;
    if (id != req.usuario.idUsuario) {
        return res.status(500).send({ message: 'No tienes permiso para modificar' })
    }
    db.query('UPDATE usuario SET estado=0 WHERE idUsuario=?', id, (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Error al modificar los datos del usuario' });
        }
        res.status(200).send(result);
    });
}
module.exports = {
    userList,
    login,
    getOne,
    modifyUser,
    createUser,
    deleteUser
};