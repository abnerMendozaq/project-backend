const pool = require('../database');
const db = pool();
consultantList = (req, res) => {
    db.query('SELECT * FROM consultora', (error, result) => {
        if (error) {
            res.status(404).send({ message: 'Error al recuperar los datos' });
        }
        res.status(200).send(result);
    });
}
getOne = (req, res) => {
    db.query();
    res.status(200).send('obtener un usuario');
}
createConsultant = (req, res) => {
    db.query();
    res.status(200).send('crear un usuario');
}
modifyConsultant = (req, res) => {
    db.query();
    res.status(200).send('modificar un usuario');
}
deleteConsultant = (req, res) => {
    db.query();
    res.status(200).send('eliminar un usuario');
}
module.exports = {
    consultantList,
    getOne,
    modifyConsultant,
    createConsultant,
    deleteConsultant
};