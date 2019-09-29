const companyModel = require('../models/empresa');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const util = require('../utils/constants');
const Controller = {};

Controller.companyList = async (req, res) => {
    let company = req.body;
    try {
        const result = await companyModel.findAll({ where: { [Op.and]: company, estado: 1 } });
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(400), json({ message: util.ERROR_400 })
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.getCompany = async (req, res) => {
    let company = req.body;
    try {
        const result = await companyModel.findOne({ where: { [Op.and]: company, estado: 1 } });
        if (result) {
            return res.json(result);
        } else {
            return res.status(404).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.createCompany = async (req, res) => {
    let company = req.body;
    try {
        const result = await companyModel.create(company);
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(500).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.modifyCompany = async (req, res) => {
    let company = req.body;
    try {
        const result = await companyModel.update(company,
            { where: { idEmpresa: company.idEmpresa } });
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(500).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.deleteCompany = async (req, res) => {
    let company = req.body;
    try {
        const result = await companyModel.update({ estado: 0 },
            { where: company });
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