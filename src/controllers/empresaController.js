const pool = require('../database');
const db = pool();
companyList = (req, res) => {
    db.query('SELECT * FROM empresa', (error, result) => {
        if (error) {
            res.status(404).send({ message: 'Error al recuperar los datos' });
        }
        res.status(200).send(result);
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
    companyList,
    getOne,
    modifyUser,
    createUser,
    deleteUser
};