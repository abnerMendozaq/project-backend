const pool = require('../database');
const mysql = require('mysql');
const db = pool();
const table = ["empresa"];
let query = '';
companyList = (req, res) => {
    let persona = req.body;
    query = 'SELECT * FROM ?? WHERE ?';
    query = mysql.format(query, [table, persona]);
    db.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ message: 'Error al recuperar los datos' });
        }
        return res.status(200).send(result);
    });
}
getOne = (req, res) => {
    let company = req.body;
    query = 'SELECT * FROM ?? WHERE ?';
    query = mysql.format(query, [table, company]);
    db.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ message: 'Error al registrar empresa' });
        }
        return res.status(200).send(result[0]);
    });
}
createCompany = (req, res) => {
    let company = req.body;
    query = 'INSERT INTO ?? SET ?';
    query = mysql.format(query, [table, company]);
    console.log(query);
    db.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ message: 'Error al registrar empresa' });
        }
        return res.status(200).send(result);
    });
}
modifyUser = (req, res) => {
    // db.query();
    return res.status(200).send('modificar un usuario');
}
deleteUser = (req, res) => {
    // db.query();
    return res.status(200).send('eliminar un usuario');
}
module.exports = {
    companyList,
    getOne,
    modifyUser,
    createCompany,
    deleteUser
};