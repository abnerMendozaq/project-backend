const db = require('../database');
const mysql = require('mysql');
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
    db.getConnectionDb((er, con) => {
        if (er) {
            res.status(500).send('Internal Server');
        }
        con.query(query, (error, result) => {
            con.release();
            if (error) {
                return res.status(404).send('Error al recuperar datos');
            }
            return res.status(200).send(result[0]);
        });
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