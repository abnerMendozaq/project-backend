const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const personModel = require('../models/persona');
const util = require('../utils/constants');
const Controller = {};

Controller.personList = async (req, res) => {
    try {
        const result = await personModel.findAll({ where: { estado: 1 } });
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(400), json({ message: util.ERROR_400 })
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.getPerson = async (req, res) => {
    let person = req.body;
    try {
        const result = await personModel.findOne({ where: { [Op.and]: person, estado: 1 } });
        if (result) {
            return res.json(result);
        } else {
            return res.status(404).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.createPerson = async (req, res) => {
    let person = req.body;
    try {
        const result = await personModel.create(person);
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(500).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.modifyPerson = async (req, res) => {
    let person = req.body;
    try {
        const result = await personModel.update(person,
            { where: { idPersona: person.idPersona } });
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(500).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.deletePerson = async (req, res) => {
    let person = req.body;
    try {
        const result = await personModel.update({ estado: 0 },
            { where: person });
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