const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const Op = Sequelize.Op;
const userModel = require('../models/usuario');
const util = require('../utils/constants');
const Controller = {};

Controller.userList = async (req, res) => {
    try {
        const result = await userModel.findAll({ where: { estado: 1 } });
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(400), json({ message: util.ERROR_400 })
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.getUser = async (req, res) => {
    let user = req.body;
    try {
        const result = await userModel.findOne({ where: { [Op.and]: user, estado: 1 } });
        if (result) {
            return res.json(result);
        } else {
            return res.status(404).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.createUser = async (req, res) => {
    let user = req.body;
    try {
        const userResult = await userModel.findOne({ where: { nombreUsuario: user.nombreUsuario, estado: 1 } });
        if (userResult) {
            return res.status(200).json({ message: 'EL NOMBRE DE USUARIO YA EXISTE' });
        } else {
            try {
                user.password = bcrypt.hash(user.password, 10);
                const result = await userModel.create(user);
                if (result) {
                    return res.status(200).json(result);
                } else {
                    return res.status(500).json(util.ERROR_400);
                }
            } catch (error) {
                return res.status(500).json(util.SERVER_500 + error);
            }
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.modifyUser = async (req, res) => {
    let user = req.body;
    try {
        const result = await userModel.update(user,
            { where: { idUsuario: user.idUsuario } });
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(500).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.deleteUser = async (req, res) => {
    let user = req.body;
    try {
        const result = await userModel.update({ estado: 0 },
            { where: user });
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(500).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}

module.exports = Controller;