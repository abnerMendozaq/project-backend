const pool = require('../database');
const mysql = require('mysql');
const db = pool();
const table = ["interes"];
let query = '';
interesList = (req, res) => {
    query = 'SELECT * FROM ??'
    query = mysql.format(query, table);
    console.log(query);
    db.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ error: error });
        }
        return res.status(200).send(result);
    });
}
getOne = (req, res) => {
    let id = req.params.id;
    query = 'SELECT * FROM ?? WHERE idInteres = ?';
    query = mysql.format(query, [table, id]);
    db.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ error: error });
        }
        return res.status(200).send(result[0]);
    });
}
createInteres = (req, res) => {
    let lvc = req.body;
    query = 'INSERT INTO ?? SET ?';
    query = mysql.format(query, [table, lvc]);
    db.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ error: error });
        }
        result.message = 'Registrado Correctamente';
        return res.status(200).send(result);
    });
}
modifyInteres = (req, res) => {
    // db.query();
    return res.status(200).send('modificar un usuario');
}
deleteInteres = (req, res) => {
    // db.query();
    return res.status(200).send('eliminar un usuario');
}
module.exports = {
    interesList,
    getOne,
    modifyInteres,
    createInteres,
    deleteInteres
};