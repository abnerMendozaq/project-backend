const mysql = require('mysql');
function ConnectionDb() {
    let pool = mysql.createPool({
        connectionLimit: 100,
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        database: 'bddaddjj'
    });
    this.getConnectionDb = function (callback) {
        pool.getConnection((error, connection) => {
            callback(error, connection);
        });
    }
}
module.exports = new ConnectionDb();