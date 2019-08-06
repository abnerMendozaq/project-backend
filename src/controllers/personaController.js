const pool = require('../database');
// const db = pool();
personList = (req, res) => {
    // db.query();
    return res.status(200).send('Usuario');
}
getOne = (req, res) => {
    // db.query();
    return res.status(200).send('obtener un usuario');
}
createPerson = (req, res) => {
    // db.query();
    return res.status(200).send('crear un usuario');
}
modifyPerson = (req, res) => {
    // db.query();
    return res.status(200).send('modificar un usuario');
}
deletePerson = (req, res) => {
    // db.query();
    return res.status(200).send('eliminar un usuario');
}
module.exports = {
    personList,
    getOne,
    modifyPerson,
    createPerson,
    deletePerson
};