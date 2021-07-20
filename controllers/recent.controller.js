const recentService = require('../services/recent.services');

const recentController = {}

recentController.create = async function(req, res, next) {
    try {
        const newRecentList = await recentService.createRectList(req.body);
        return res.status(201).json({newRecentList})
    } catch(error) {
        return res.status(400).json({status:400, message: error.message})
    }
}

recentController.getRectList = async function(req, res, next) {
    try {
        const recents = await recentService.createRectList();
        return  res.status(200).json({ status:200, data:recents, message: "Successufully rectList retrived"})
    }catch(e) {
        return  res.status(400).json({ status:400, message: error.message})
    }
}

module.exports = recentController;