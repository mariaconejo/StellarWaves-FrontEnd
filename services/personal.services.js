const Personal = require('../models/personal.model');

const personalService = {}

personalService.createPersonalList = async function ({name, listSongs, userId}) {
    try {
        const personal = new Personal ({name, listSongs, userId})
        const newPersonalList =  await personal.save()
        return newPersonalList;
    } catch(e){
        throw new Error ('Error while save personalList')
    }
}

personalService.getPersonalList = async function(){
    try {
        const personallist = await Personal.find({});
        return personallist;
    }catch (e){
        throw new Error ('Error while paginating personalList')
    }
}

module.exports = personalService;