const pool = require('../database');
const bcrypt = require('bcrypt');
const jwt = require('../services/jwt-service');
const mysql = require('mysql');
const db = pool();
const table = ["usuario"];
let query='';
userList = (req, res) => {
    query = 'SELECT * from ??';
    query = mysql.format(query, table);
    db.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ message: 'Error al recuperar datos' });
        }
        return res.status(200).send(result);
    });
}
login = (req, res) => {
    let params = req.body;
    let usuario = params.nombreUsuario;
    let password = params.password;
    query = 'SELECT * from ?? WHERE nombreUsuario = ? AND estado=1';
    query = mysql.format(query, [table, usuario]);
    db.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ message: 'Error al recuperar los datos' });
        }
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (check) => {
                if (!check) {
                    if (params.gettoken) {
                        return res.status(200).send({ token: jwt.encodeToken(result[0]) });
                    } else {
                        result[0].password = undefined;
                        return res.status(200).send(result[0]);
                    }
                } else {
                    return res.status(404).send({ message: 'El usuario no se ha podido identificar1' });
                }

            })
        } else {
            return res.status(404).send({ message: 'El usuario no se ha podido identificar' });
        }
    });
}
getOne = (req, res) => {
    let idUsuario = req.params.id;
    query = 'SELECT * from ?? WHERE idUsuario = ?';
    query = mysql.format(query, [table, idUsuario]);
    db.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ message: 'Error al recuperar datos' });
        }
        if (result.length == 0) {
            return res.status(403).send({ message: 'No existe el usuario' });
        }
        result[0].password = undefined;
        return res.status(200).send(result[0]);
    });
}
createUser = (req, res) => {
    let usuario = req.body;
    query = 'SELECT * from ?? WHERE nombreUsuario = ?';
    query = mysql.format(query, [table, usuario.nombreUsuario]);
    console.log(query);
    db.query(query, (error, result) => {
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
}
userListPaginate = (req, res) => {
    let query = "Select count(*) as TotalCount from ??";
    let totalCount = 0;
    let startNum = 10;
    let LimitNum = 10;
    query = mysql.format(query, table);
    db.query(query, (err, rows) => {
        if (err) {
            return res.status(500).send(err);
        } else {
            totalCount = rows[0].TotalCount
            // if (req.para.start == '' || req.body.limit == '') {
            //     console.log('entra aqui');
            //     startNum = 0;
            //     LimitNum = 10;
            // }
            // else {
            //     console.log('lo vacia');
            //     startNum = parseInt(req.body.start);
            //     LimitNum = parseInt(req.body.limit);
            // }
        }
        console.log(LimitNum);
        console.log(startNum);
        let query = "Select * from ?? ORDER BY nombreUsuario ASC limit ? OFFSET ?";
        let table = ["usuario", LimitNum, startNum];
        query = mysql.format(query, table);
        db.query(query, (err, rest) => {
            if (err) {
                return res.status(500).send(err);
            }
            else {
                // Total Count varibale display total Count in Db and data display the records
                return res.status(200).send({ totalCount, rest, paginas: Math.ceil(totalCount / LimitNum) })
            }
        });
    });
}
modifyUser = (req, res) => {
    let id = req.params.id;
    let usuario = req.body;
    query = 'SELECT * from ?? WHERE nombreUsuario = ?';
    query = mysql.format(query, [table, usuario.nombreUsuario]);
    if (id != req.usuario.idUsuario) {
        return res.status(500).send({ message: 'No tienes permiso para modificar' })
    }
    db.query(query, (error, result) => {
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
}
deleteUser = (req, res) => {
    let id = req.params.id;
    query = 'UPDATE ?? SET estado=0 WHERE idUsuario=?';
    query = mysql.format(query, [table, id]);
    if (id != req.usuario.idUsuario) {
        return res.status(500).send({ message: 'No tienes permiso para modificar' })
    }
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send({ message: 'Error al modificar los datos del usuario' });
        }
        return res.status(200).send(result);
    });
}
module.exports = {
    userList,
    login,
    getOne,
    modifyUser,
    createUser,
    deleteUser,
    userListPaginate
};