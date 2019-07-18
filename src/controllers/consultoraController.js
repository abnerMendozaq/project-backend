const pool = require('../database');
// const db = pool();
consultantList = (req, res) => {
    // db.query();
    res.status(200).send('Usuario');
}
getOne = (req, res) => {
    // db.query();
    res.status(200).send('obtener un usuario');
}
createCompany = (req, res) => {
    // db.query();
    res.status(200).send('crear un usuario');
}
modifyConsultant = (req, res) => {
    // db.query();
    res.status(200).send('modificar un usuario');
}
deleteConsultant = (req, res) => {
    // db.query();
    res.status(200).send('eliminar un usuario');
}
module.exports = {
    consultantList,
    getOne,
    modifyConsultant,
    createCompany,
    deleteConsultant
};