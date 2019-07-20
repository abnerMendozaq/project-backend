const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'rest'
function encodeToken(usuario) {
    let payload = {
        idUsuario: usuario.idUsuario,
        nombreUsuario: usuario.nombreUsuario,
        password: usuario.password,
        rol: usuario.rol,
        foto: usuario.foto,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    };
    return jwt.encode(payload, secret, 'HS256');
}
function decodeToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'La peticion no tiene autorizacion' });
    }
    let token = req.headers.authorization.replace(/['"]+/g, '');
    try {
        var payload = jwt.decode(token, secret);
        if (payload.exp <= moment().unix()) {
            return res.status(401).send({ message: 'El token ha expirado' });
        }
    } catch (error) {
        return res.status(404).send({ message: 'El token no es valido' });
    }
    req.usuario = payload;
    next();
}
module.exports = {
    encodeToken,
    decodeToken
}