const db = require('../database');
const mysql = require('mysql');
const table = ["interes"];
let query = '';
interesList = (req, res) => {
    query = 'SELECT * FROM ??'
    query = mysql.format(query, table);
    db.getConnectionDb((er, con) => {
        if (er) {
            res.status(500).send({ error: er });
        }
        con.query(query, (error, result) => {
            con.release();
            if (error) {
                return res.status(404).send({ error: error });
            }
            return res.status(200).send(result);
        });
    });
}
getOne = (req, res) => {
    let interes = req.body;
    query = 'SELECT * FROM ?? WHERE ?';
    query = mysql.format(query, [table, interes]);
    db.getConnectionDb((er, con) => {
        if (er) {
            res.status(500).send({ error: er });
        }
        con.query(query, (error, result) => {
            con.release();
            if (error) {
                return res.status(404).send({ error: error });
            }
            return res.status(200).send(result[0]);
        });
    });
}
createInteres = (req, res) => {
    let interes = req.body;
    query = 'INSERT INTO ?? SET ?';
    query = mysql.format(query, [table, interes]);
    db.getConnectionDb((er, con) => {
        if (er) {
            res.status(500).send({ error: er });
        }
        con.query(query, (error, result) => {
            con.release();
            if (error) {
                return res.status(404).send({ error: error });
            }
            result.message = 'Registrado Correctamente';
            return res.status(200).send(result);
        });
    });
}
modifyInteres = (req, res) => {
    let interes = req.body;
    query = 'UPDATE ?? SET ? WHERE idInteres=?';
    query = mysql.format(query, [table, interes,interes.idInteres]);
    db.getConnectionDb((er, con) => {
        if (er) {
            res.status(500).send({ error: er });
        }
        con.query(query, (error, result) => {
            con.release();
            if (error) {
                return res.status(404).send({ error: error });
            }
            result.message = 'Modificado Correctamente';
            return res.status(200).send(result);
        });
    });
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