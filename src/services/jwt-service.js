const jwt = require('jwt-simple');
const moment = require('moment');
const util = require('../utils/constants');
const Controller = {};
Controller.encodeToken = (usuario) => {
    let payload = {
        idUsuario: usuario.idUsuario,
        nombreUsuario: usuario.nombreUsuario,
        password: usuario.password,
        rol: usuario.rol,
        foto: usuario.foto,
        iat: moment().unix(),
        exp: moment().add(24, 'hours').unix()
    };
    return jwt.encode(payload, util.SECRET_KEY, 'HS256');
}
Controller.decodeToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: util.UNAUTHORIZED });
    }
    let token = req.headers.authorization.replace(/['"]+/g, '');
    try {
        var payload = jwt.decode(token, util.SECRET_KEY);
        if (payload.exp <= moment().unix()) {
            return res.status(401).send({ message: util.TOKEN_EXPIRED });
        }
    } catch (error) {
        return res.status(404).send({ message: util.INVALID_TOKEN });
    }
    req.usuario = payload;
    next();
}
module.exports = Controller;