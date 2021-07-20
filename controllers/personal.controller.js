const personalService = require('../services/personal.services');

const personalController = {}

personalController.create = async function(req, res, next) {
    try {
        const newPersonalList = await personalService.createPersonalList(req.body);
        return res.status(201).json({newPersonalList})
    } catch(error) {
        return res.status(400).json({status:400, message: error.message})
    }
}

personalController.getPersonalList = async function(req, res, next) {
    try {
        const personals = await personalService.createPersonalList();
        return  res.status(200).json({ status:200, data:personals, message: "Successufully personalList retrived"})
    }catch(e) {
        return  res.status(400).json({ status:400, message: error.message})
    }
}

module.exports = personalController;