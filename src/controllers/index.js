const pool = require('../database');

// const db = pool();
indexList = (req, res) => {
    // db.query();
    res.status(200).send('Servidor Funcionando Correctamente');
}
module.exports = {
    indexList
};