const pool = require('../database');
const db = pool();
createUserCompany = (req, res) => {
    var persona = req.body[0];
    var usuario = req.body[1];
    var empresa = req.body[2];
    try {
        db.beginTransaction((err) => {
            if (err) { res.status(500).send({ message: 'Internal Server' }); }
            db.query('INSERT INTO persona set ?', persona, (err, result) => {
                if (err) {
                    db.rollback(() => res.status(500).send({ message: 'Error al realizar la transaccion de persona' }));
                }
                usuario.idPersona = result.insertId;
                empresa.idPersona = result.insertId;
                db.query('INSERT INTO usuario set ?', usuario, (err, result) => {
                    if (err) {
                        db.rollback(() => res.status(500).send({ message: 'Error al realizar la transaccion de usuario' }));
                    }
                    db.query('INSERT INTO empresa set ?', empresa, (err, result) => {
                        if (err) {
                            db.rollback(() => res.status(500).send({ message: 'Error al realizar la transaccion de consultora' }));
                        }
                        res.status(200).send(result);
                        db.commit();
                        db.end();
                    });
                });
            })
        });
    } catch (error) {
        db.end();
        res.status(500).send({ message: `Error al realizar la transaccion ${error}` });
    }
}
createUserConsultant = (req, res) => {
    var persona = req.body[0];
    var usuario = req.body[1];
    var consultora = req.body[2];
    try {
        db.beginTransaction((err) => {
            if (err) { res.status(500).send({ message: 'Internal Server' }); }
            db.query('INSERT INTO persona set ?', persona, (err, result) => {
                if (err) {
                    db.rollback(() => res.status(500).send({ message: 'Error al realizar la transaccion de persona' }));
                }
                usuario.idPersona = result.insertId;
                consultora.idPersona = result.insertId;
                db.query('INSERT INTO usuario set ?', usuario, (err, result) => {
                    if (err) {
                        db.rollback(() => res.status(500).send({ message: 'Error al realizar la transaccion de usuario' }));
                    }
                    db.query('INSERT INTO consultora set ?', consultora, (err, result) => {
                        if (err) {
                            db.rollback(() => res.status(500).send({ message: 'Error al realizar la transaccion de consultora' }));
                        }
                        res.status(200).send(result);
                        db.commit();
                        db.end();
                    });
                });
            })
        });
    } catch (error) {
        db.end();
        res.status(500).send({ message: `Error al realizar la transaccion ${error}` });
    }
}
module.exports = {
    createUserCompany,
    createUserConsultant
};