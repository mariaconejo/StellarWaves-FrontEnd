const Favorite = require('../models/favorite.model');

const favoriteService = {}

favoriteService.createFavList = async function ({name, listSongs, userId}) {
    try {
        const favorite = new Favorite ({name, listSongs, userId})
        const newFavoriteList =  await favorite.save()
        return newFavoriteList;
    } catch(e){
        throw new Error ('Error while save favlist')
    }
}

favoriteService.getFavList = async function(){
    try {
        const favlist = await Favorite.find({});
        return favlist;
    }catch (e){
        throw new Error ('Error while paginating favlist')
    }
}

module.exports = favoriteService;