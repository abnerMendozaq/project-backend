const pool = require('./database');
const db = pool();
function startWebsocket(server) {
    let io = require('socket.io')(server);
    io.on('connection', socket => {
        console.log('Socket Connected');
        db.query('SELECT * from ufv', (error, result) => {
            if (error) {
                socket.emit('api/ufvs', error)
                return;
            }
            socket.emit('api/ufvs', result)
            return;
        });
    });
}

module.exports = {
    startWebsocket
}