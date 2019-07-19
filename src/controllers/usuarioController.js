const pool = require('../database');
const db = pool();
userList = (req, res) => {
    db.query('SELECT * from usuario', (error, result) => {
        console.log(error);
        res.send(result);
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
    getOne,
    modifyUser,
    createUser,
    deleteUser
};