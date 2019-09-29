const diaNoHabil = require('../models/dianohabil');
const constants = require('../utils/constants');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Controller = {};

Controller.getHollidays = async (req, res) => {
    let dates = req.body;
    try {
        let result = await diaNoHabil.findAll({
            where: {
                fecha: {
                    [Op.between]: [dates.inicio, dates.fin]
                }
            }
        });
        if (result.length != []) {
            return res.json(result);
        } else {
            return res.status(400).json(constants.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(constants.SERVER_500);
    }
}
Controller.createHollidays = async (req, res) => {
    let hollidays = req.body;
    await diaNoHabil.bulkCreate(hollidays)
        .then((result) => {
            try {
                return res.json(result);
            } catch (error) {
                return res.status(400).json(constants.ERROR_400);
            }
        }).catch((error) => {
            return res.status(500).json(constants.SERVER_500);
        });
}

module.exports = Controller;
