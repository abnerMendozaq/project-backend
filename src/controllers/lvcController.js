const pool = require('../database');
const mysql = require('mysql');
const db = pool();
const table = ["lvc"];
let query = '';
lvcList = (req, res) => {
    query = 'SELECT * FROM ??'
    query = mysql.format(query, table);
    db.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ error: error });
        }
        return res.status(200).send(result);
    });
}
getOne = (req, res) => {
    let id = req.params.id;
    query = 'SELECT * FROM ?? WHERE idLvc = ?';
    query = mysql.format(query, [table, id]);
    db.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ error: error });
        }
        return res.status(200).send(result[0]);
    });
}
createLvc = (req, res) => {
    let lvc = req.body;
    query = 'INSERT INTO ?? SET ?';
    query = mysql.format(query, [table, lvc]);
    db.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ error: error });
        }
        return res.status(200).send(result);
    });
}
modifyLvc = (req, res) => {
    // db.query();
    return res.status(200).send('modificar un usuario');
}
deleteLvc = (req, res) => {
    // db.query();
    return res.status(200).send('eliminar un usuario');
}
module.exports = {
    lvcList,
    getOne,
    modifyLvc,
    createLvc,
    deleteLvc
};