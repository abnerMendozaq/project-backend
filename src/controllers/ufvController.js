const pool = require('../database');
const mysql = require('mysql');
const db = pool();
const table = ["ufv"];
let query = '';
ufvList = (req, res) => {
    db.query('SELECT * from ufv ORDER BY fechaUfv DESC', (error, result) => {
        if (error) {
            return res.status(404).send({ message: 'Error al recuperar datos' });
        }
        return res.status(200).send(result);
    });
}
getOne = (req, res) => {
    let idUfv = req.params.id;
    db.query('SELECT * from ufv WHERE idUfv=?', idUfv, (error, result) => {
        if (error) {
            return res.status(404).send({ message: 'Error al recuperar datos' });
        }
        if (result.length == 0) {
            return res.status(403).send({ message: 'No existe la ufv' });
        }
        return res.status(200).send(result[0]);
    });
}
getUfvOfDay = (req, res) => {
    let fechaUfv = req.body;
    query = 'SELECT * from ?? where ?';
    query = mysql.format(query, [table, fechaUfv]);
    console.log(query);
    db.query(query, (error, result) => {
        if (error) {
            return res.status(404).send({ message: 'Error al recuperar datos' });
        }
        if (result.length == 0) {
            return res.status(403).send({ message: 'No existe la ufv' });
        }
        return res.status(200).send(result[0]);
    });
}
createUfv = (req, res) => {
    console.log(req.body);
    let ufv = req.body;
    db.query('SELECT * from ufv WHERE fechaUfv=?', ufv.fechaUfv, (error, result) => {
        if (error) {
            return res.status(404).send({ message: 'Error al recuperar los datos' });
        }
        console.log(result);
        if (result.length > 0) {
            return res.status(403).send({ message: 'La ufv ya existe' });
        }
        db.query('INSERT INTO ufv set ?', ufv, (err, result) => {
            if (err) {
                return res.status(500).send({ message: 'Error al realizar el registro de la ufv' });
            }
            return res.status(200).send(result);
        });
    });
}
modifyUfv = (req, res) => {
    let id = req.params.id;
    let ufv = req.body;
    db.query('UPDATE ufv SET ? WHERE idUfv = ?', [ufv, id], (err, result) => {
        if (err) {
            return res.status(500).send({ message: 'Error al modificar los datos de la ufv' });
        }
        return res.status(200).send(result);
    });
}
deleteUfv = (req, res) => {
    let id = req.params.id;
    db.query('UPDATE ufv SET estado=0 WHERE idUfv=?', id, (err, result) => {
        if (err) {
            return res.status(500).send({ message: 'Error al eliminar la ufv' });
        }
        return res.status(200).send(result);
    });
}
module.exports = {
    ufvList,
    getOne,
    getUfvOfDay,
    modifyUfv,
    createUfv,
    deleteUfv
};