const _ = require('lodash');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const consultantModel = require('../models/consultora');
const util = require('../utils/constants');
const Controller = {};

Controller.consultantList = async (req, res) => {
    try {
        const result = await consultantModel.findAll({ where: { estado: 1 } });
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(400), json({ message: util.ERROR_400 })
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.getConsultant = async (req, res) => {
    let consultant = req.body;
    try {
        const result = await consultantModel.findOne({ where: { [Op.and]: consultant, estado: 1 } });
        if (result) {
            return res.json(result);
        } else {
            return res.status(404).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.createConsultant = async (req, res) => {
    let consultant = req.body;
    try {
        const result = await consultantModel.create(consultant);
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(500).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.modifyConsultant = async (req, res) => {
    let consultant = req.body;
    try {
        const result = await consultantModel.update(consultant,
            { where: { idConsultora: consultant.idConsultora } });
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(500).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.deleteConsultant = async (req, res) => {
    let consultant = req.body;
    try {
        const result = await consultantModel.update({ estado: 0 },
            { where: consultant });
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