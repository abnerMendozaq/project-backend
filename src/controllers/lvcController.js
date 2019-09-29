const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const lvcModel = require('../models/lvc');
const util = require('../utils/constants');
const Controller = {};

Controller.lvcList = async (req, res) => {
    let lvc = req.body;
    try {
        const result = await lvcModel.findAll({ where: { [Op.and]: lvc, estado: 1 } });
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(400), json({ message: util.ERROR_400 })
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
Controller.getlvc = async (req, res) => {
    let lvc = req.body;
    try {
        const result = await lvcModel.findOne({ where: { [Op.and]: lvc, estado: 1 } });
        if (result) {
            return res.json(result);
        } else {
            return res.status(404).json(util.ERROR_400);
        }
    } catch (error) {
        return res.status(500).json(util.SERVER_500 + error);
    }
}
// Controller.createlvc = async (req, res) => {
//     let lvc = req.body;
//     try {
//         const result = await lvcModel.create(lvc);
//         if (result) {
//             return res.status(200).json(result);
//         } else {
//             return res.status(500).json(util.ERROR_400);
//         }
//     } catch (error) {
//         return res.status(500).json(util.SERVER_500 + error);
//     }
// }
// Controller.modifylvc = async (req, res) => {
//     let lvc = req.body;
//     try {
//         const result = await lvcModel.update(lvc,
//             { where: { idLvc: lvc.idLvc } });
//         if (result) {
//             return res.status(200).json(result);
//         } else {
//             return res.status(500).json(util.ERROR_400);
//         }
//     } catch (error) {
//         return res.status(500).json(util.SERVER_500 + error);
//     }
// }
// Controller.deletelvc = async (req, res) => {
//     let lvc = req.body;
//     try {
//         const result = await lvcModel.update({ estado: 0 },
//             { where: lvc });
//         if (result) {
//             return res.status(200).json(result);
//         } else {
//             return res.status(500).json(util.ERROR_400);
//         }
//     } catch (error) {
//         return res.status(500).json(util.SERVER_500 + error);
//     }
// }

module.exports = Controller;