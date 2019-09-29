const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const interestModel = require('../models/interes');
const util = require('../utils/constants');
const Controller = {};

Controller.interestList = async (req, res) => {
    try {
        const result = await interestModel.findAll({ where: { estado: 1 } });
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(400), json({ message: util.ERROR_400 })
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.getInterest = async (req, res) => {
    let interest = req.body;
    try {
        const result = await interestModel.findOne({ where: { [Op.and]: interest, estado: 1 } });
        if (result) {
            return res.json(result);
        } else {
            return res.status(404).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.createInterest = async (req, res) => {
    let interest = req.body;
    try {
        const result = await interestModel.create(interest);
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(500).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.modifyInterest = async (req, res) => {
    let interest = req.body;
    try {
        const result = await interestModel.update(interest,
            { where: { idInteres: interest.idInteres } });
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(500).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.deleteInterest = async (req, res) => {
    let interest = req.body;
    try {
        const result = await interestModel.update({ estado: 0 },
            { where: interest });
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