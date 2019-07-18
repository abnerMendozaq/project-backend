const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const indexRoutes = require('./routes/index');
const usuarioRoutes = require('./routes/usuarioRoutes')
const app = express();
/**Settings */
app.set('port', process.env.PORT || 3000);
/**Middleware */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/**Cors */
app.use(cors());
/**Routes */
app.use('/api', indexRoutes);
app.use('/api', usuarioRoutes);
/**Iniciar Servidor */
app.listen(app.get('port'), () => {
    console.log(`Server on port`, app.get('port'));
});