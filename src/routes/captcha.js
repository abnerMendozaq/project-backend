const express = require('express');
const request = require('request');
const server = 'https://google.com/recaptcha/api/siteverify';
const secret = '6Le_GrcUAAAAALXG71pjpHT2R9Eja0CXnaEGFtP7';
const router = express.Router()
router.post('/captcha', (req, res) => {
    if (req.body.captcha === undefined || req.body.captcha === null || req.body.captcha === '') {
        return res.status(404).send({ error: 'Seleccione Captcha', msg: false });
    }
    const verifyCaptcha = `${server}?secret=${secret}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;
    request(verifyCaptcha, (err, response, body) => {
        body = JSON.parse(body);
        if (body.success != undefined && !body.success) {
            return res.status(500).send({ error: err, msg: false });
        }
        return res.status(200).send(response.body);
    });
});
module.exports = router;