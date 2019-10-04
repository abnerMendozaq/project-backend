const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const webSocket = require('./services/socketService');

const indexRoutes = require('./routes/index');
const usuarioRoutes = require('./routes/usuarioRoutes');
const transaccionesRoutes = require('./routes/transaccionesRoutes');
const consultoraRoutes = require('./routes/consultoraRoutes');
const ufvRoutes = require('./routes/ufvRoutes');
const lvcRoutes = require('./routes/lvcRoutes');
const empresaRoutes = require('./routes/empresaRoutes');
const interesRoutes = require('./routes/interesRoutes');
const personaRouter = require('./routes/personaRoutes');
const authRouter = require('./routes/authRoutes');
const calendarioRouter = require('./routes/calendarioRouter');
const crypto = require('./services/crypto-service');

const app = express();
const server = require('http').Server(app);
/**websocket server */
webSocket.configure(server);
/**Settings */
app.set('port', process.env.PORT || 3000);
/**Middleware */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/**Cors */
app.use(cors());
/**Routes */
app.use('/', indexRoutes);
app.use('/api', usuarioRoutes);
app.use('/api', consultoraRoutes);
app.use('/api', transaccionesRoutes);
app.use('/api', ufvRoutes);
app.use('/api', lvcRoutes);
app.use('/api', empresaRoutes);
app.use('/api', interesRoutes);
app.use('/api', personaRouter);
app.use('/api', authRouter);
app.use('/api', calendarioRouter);
/**Iniciar Servidor */
server.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}`);
});
