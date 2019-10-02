const socket = require('socket.io');
const md_auth = require('./jwt-service');

const SocketService = (() => {
    this.io = null;
    this.configure = (server) => {
        this.io = socket(server);
        this.io.use(md_auth.decodeTokenWs);
        this.io.on('connect', socket => {
            console.log('USER CONECTED');
            
            socket.on('disconnect', function () {
                console.log('user disconnected');
            });
            
        });
    }
    return this;
})();

module.exports = SocketService;