const pool = require('../database');

// const db = pool();
indexList = (req, res) => {
    // db.query();
    res.status(200).send('index');
}
module.exports = {
    indexList
};