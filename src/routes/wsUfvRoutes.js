const ufvModel = require('../models/ufv');
const util = require('../utils/constants');

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('message', (message) => {
            console.log(message);
            io.emit('message', message);
        });
        socket.on('disconnect', function () {
            console.log('user disconnected');
        });
    });
}