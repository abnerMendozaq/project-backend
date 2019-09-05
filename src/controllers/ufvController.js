const db = require('../database');
const mysql = require('mysql');
const table = ["ufv"];
let query = '';
ufvList = (req, res) => {
    query = 'SELECT * from ?? ORDER BY fechaUfv DESC';
    query = mysql.format(query, table);
    db.getConnectionDb((er, con) => {
        if (er) {
            res.status(500).send({ error: er });
        }
        con.query(query, (error, result) => {
            con.release();
            if (error) {
                return res.status(404).send({ message: 'Error al recuperar datos' });
            }
            return res.status(200).send(result);
        });
    });
}
getOne = (req, res) => {
    let ufv = req.body;
    query = 'SELECT * from ?? WHERE ?';
    query = mysql.format(query, [table, ufv]);
    db.getConnectionDb((er, con) => {
        if (er) {
            res.status(500).send({ error: er });
        }
        con.query(query, (error, result) => {
            con.release();
            if (error) {
                return res.status(404).send({ message: 'Error al recuperar datos' });
            }
            if (result.length == 0) {
                return res.status(403).send({ message: 'No existe la ufv' });
            }
            return res.status(200).send(result[0]);
        });
    });
}
createUfv = (req, res) => {
    let ufv = req.body;
    query = 'SELECT * from ?? WHERE fechaUfv=?';
    query = mysql.format(query, [table, ufv.fechaUfv]);
    console.log(query);
    db.getConnectionDb((er, con) => {
        if (er) {
            return res.status(500).send({ error: er });
        }
        con.query(query, (error, result) => {
            con.release();
            if (error) {
                return res.status(404).send({ message: 'Error al recuperar los datos' });
            }
            console.log(result);
            if (result.length > 0) {
                return res.status(403).send({ message: 'La ufv ya existe' });
            } else {
                try {
                    query = 'INSERT INTO ?? set ?';
                    query = mysql.format(query, [table, ufv]);
                    console.log(query);
                    con.query(query, (err, result) => {
                        if (err) {
                            return res.status(500).send({ message: 'Error al realizar el registro de la ufv' });
                        }
                        return res.status(200).send(result);
                    });
                } catch (error) {
                    console.log(error);
                }
            }
        });
    })

}
modifyUfv = (req, res) => {
    let ufv = req.body;
    query = 'UPDATE ?? SET ? WHERE idUfv = ?';
    query = mysql.format(query, [table, ufv, ufv.idUfv]);
    db.getConnectionDb((er, con) => {
        if (er) {
            res.status(500).send({ error: er });
        }
        con.query(query, (err, result) => {
            con.release();
            if (err) {
                return res.status(500).send({ message: 'Error al modificar los datos de la ufv' });
            }
            result.message = 'Modificado Correctamente';
            return res.status(200).send(result);
        });
    });
}
deleteUfv = (req, res) => {
    let ufv = req.body;
    query = 'UPDATE ?? SET estado=0 WHERE idUfv=?';
    query = mysql.format(query, [table, ufv]);
    db.getConnectionDb((er, con) => {
        if (er) {
            res.status(500).send({ error: er });
        }
        con.query(query, (err, result) => {
            con.release();
            if (err) {
                return res.status(500).send({ message: 'Error al eliminar la ufv' });
            }
            return res.status(200).send(result);
        });
    });
}
module.exports = {
    ufvList,
    getOne,
    modifyUfv,
    createUfv,
    deleteUfv
};