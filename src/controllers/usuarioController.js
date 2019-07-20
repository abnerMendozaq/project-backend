const pool = require('../database');
const bcrypt = require('bcrypt');
const jwt = require('../services/jwt-service')
const db = pool();
userList = (req, res) => {
    db.query('SELECT * from usuario', (error, result) => {
        console.log(error);
        res.send(result);
    });
}
login = (req, res) => {
    let usuario = req.body.nombreUsuario;
    let password = req.body.password;
    db.query('SELECT * FROM usuario WHERE nombreUsuario = ?', usuario, (error, result) => {
        if (error) {
            res.status(404).send({ message: 'Error al recuperar los datos' });
        }
        bcrypt.compare(password, result[0].password, check => {
            if (req.body.gettoken) {
                res.status(200).send({ token: jwt.encodeToken(result[0]) });
            } else {
                result[0].password = undefined;
                res.status(200).send(result[0]);
            }
        })
    });
}
getOne = (req, res) => {
    // db.query();
    res.status(200).send('obtener un usuario');
}
createUser = (req, res) => {
    // db.query();
    res.status(200).send('crear un usuario');
}
modifyUser = (req, res) => {
    // db.query();
    res.status(200).send('modificar un usuario');
}
deleteUser = (req, res) => {
    // db.query();
    res.status(200).send('eliminar un usuario');
}
module.exports = {
    userList,
    login,
    getOne,
    modifyUser,
    createUser,
    deleteUser
};