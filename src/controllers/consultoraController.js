const pool = require('../database');
const mysql = require('mysql');
const db = pool();
const table = ["consultora"];
let query = '';
consultantList = (req, res) => {
    query = 'SELECT * FROM ??';
    query = mysql.format(query, table);
    db.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ message: 'Error al recuperar los datos' });
        }
        return res.status(200).send(result);
    });
}
getOne = (req, res) => {
    let consultora = req.body;
    query = 'SELECT * FROM ?? WHERE ?'
    query = mysql.format(query, [table, consultora]);
    console.log(query);
    db.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ message: 'Error al recuperar los datos' });
        }
        return res.status(200).send(result[0]);
    });

}
createConsultant = (req, res) => {
    db.query();
    return res.status(200).send('crear un usuario');
}
modifyConsultant = (req, res) => {
    db.query();
    return res.status(200).send('modificar un usuario');
}
deleteConsultant = (req, res) => {
    db.query();
    return res.status(200).send('eliminar un usuario');
}
module.exports = {
    consultantList,
    getOne,
    modifyConsultant,
    createConsultant,
    deleteConsultant
};