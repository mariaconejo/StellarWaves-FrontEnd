const mongoose = require('mongoose')
const Schema = mongoose.Schema

const favoriteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    listSongs:{
        type: Array,
        required: true
    },
    userId:{
        type: String,
        required: true
    }
}, { versionKey: false})


const Favorite = mongoose.model('Favorite', favoriteSchema)
module.exports = Favorite