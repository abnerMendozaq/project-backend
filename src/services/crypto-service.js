const crypto = require('crypto-js');
const util = require('../utils/constants');
const Controller = {};

Controller.encryptData = (data) => {
    let ciphertext = crypto.RC4Drop.encrypt(data, util.SECRET_KEY, {
        drop: 4 / 4
    }).toString();
    return ciphertext;
}
Controller.decryptData = (ciphertext) => {
    var bytes = crypto.RC4Drop.decrypt(ciphertext, util.SECRET_KEY, {
        drop: 4 / 4
    });
    var originalText = bytes.toString(crypto.enc.Utf8);
    return originalText;
}

module.exports = Controller;