const pool = require('../database');
const mysql = require('mysql');
const db = pool();
const table = ["persona"];
let query = '';

personList = (req, res) => {
    // db.query();
    return res.status(200).send('Usuario');
}
getPersonCi = (req, res) => {
    let persona = req.body;
    query = 'SELECT idPersona FROM ?? WHERE ?';
    query = mysql.format(query, [table, persona]);
    console.log(query);
    db.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ error: error });
        }
        return res.status(200).send(result[0]);
    });
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
    deletePerson,
    getPersonCi
};