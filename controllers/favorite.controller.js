const favoriteService = require('../services/favorite.services');

const favoriteController = {}

favoriteController.create = async function(req, res, next) {
    try {
        const newFavoriteList = await favoriteService.createFavList(req.body);
        return res.status(201).json({newFavoriteList})
    } catch(error) {
        return res.status(400).json({status:400, message: error.message})
    }
}

favoriteController.getFavList = async function(req, res, next) {
    try {
        const favorites = await favoriteService.createFavList();
        return  res.status(200).json({ status:200, data:favorites, message: "Successufully favList retrived"})
    }catch(e) {
        return  res.status(400).json({ status:400, message: error.message})
    }
}

module.exports = favoriteController;