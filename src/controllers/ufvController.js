const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const ws = require('../services/socketService');
const ufvModel = require('../models/ufv');
const util = require('../utils/constants');
const Controller = {};

Controller.ufvList = async (req, res) => {
    try {
        const result = await ufvModel.findAll({ where: { estado: 1 } });
        if (result) {
            ws.io.emit('message', result);
            return res.status(200).json(result);
        } else {
            return res.status(400), json({ message: util.ERROR_400 })
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.getUfv = async (req, res) => {
    let ufv = req.body;
    try {
        const result = await ufvModel.findOne({ where: { [Op.and]: ufv, estado: 1 } });
        if (result) {
            return res.json(result);
        } else {
            return res.status(404).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.createUfv = async (req, res) => {
    let ufv = req.body;
    try {
        const result = await ufvModel.create(ufv);
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(500).json({ message: util.ERROR_400 });
        }
    } catch (error) {
        return res.status(500).json({ message: util.SERVER_500 + error });
    }
}
Controller.createUfvs = async (req, res) => {
    let ufvs = req.body;
    try {
        const result = await ufvModel.bulkCreate(ufvs);
        if (result) {
            return res.json(result);
        } else {
            return res.status(400).json({ message: util.ERROR_400 })
        }
    } catch (error) {
        return res.status(500).json({ message: util.SERVER_500 });
    }
}
Controller.modifyUfv = async (req, res) => {
    let ufv = req.body;
    try {
        const result = await ufvModel.update(ufv,
            { where: { idUfv: ufv.idUfv } });
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(500).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.deleteUfv = async (req, res) => {
    let ufv = req.body;
    try {
        const result = await ufvModel.update({ estado: 0 },
            { where: ufv });
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