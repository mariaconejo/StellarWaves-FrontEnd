const Recent = require('../models/recent.model');

const recentService = {}

recentService.createRectList = async function ({name, listSongs, userId}) {
    try {
        const recent = new Recent ({name, listSongs, userId})
        const newRecentList =  await recent.save()
        return newRecentList;
    } catch(e){
        throw new Error ('Error while save rectlist')
    }
}

recentService.getRectList = async function(){
    try {
        const rectlist = await Recent.find({});
        return rectlist;
    }catch (e){
        throw new Error ('Error while paginating rectlist')
    }
}

module.exports = recentService;