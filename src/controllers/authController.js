const bcrypt = require('bcryptjs');
const jwt = require('../services/jwt-service');
const request = require('request');
const util = require('../utils/constants');
const userModel = require('../models/usuario');
const _ = require('lodash');
const Controller = {};

Controller.login = async (req, res) => {
    let captcha = req.body.captcha;
    let auth = req.body;
    if (captcha === undefined || captcha === null || captcha === '') {
        return res.status(404).json({ message: util.ERROR_CAPTCHA });
    }
    const verifyCaptcha = `${util.SERVER_CAPTCHA}?secret=${util.KEY_CAPTCHA}&response=${captcha}&remoteip=${req.connection.remoteAddress}`;
    request(verifyCaptcha, async (err, response, body) => {
        body = JSON.parse(body);
        if (body.success != undefined && !body.success) {
            return res.status(404).json(err);
        }
        try {
            const user = await userModel.findOne({ where: { nombreUsuario: auth.nombreUsuario, estado: 1 } });
            if (user) {
                let check = bcrypt.compareSync(auth.password.trim(), user.password.trim());
                if (check) {
                    if (auth.gettoken) {
                        user.password = undefined;
                        return res.json({
                            usuario: user,
                            token: jwt.encodeToken(user)
                        });
                    }
                } else {
                    return res.status(400).json({ message: util.USER_WRONG });
                }
            } else {
                return res.status(400).json({ message: util.USER_BLOQUED });
            }
        } catch (error) {
            return res.status(500).json({ message: `${util.SERVER_500} ${error.message}` });
        }
    });
}

module.exports = Controller;