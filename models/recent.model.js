const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recentSchema = new Schema({
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


const Recent = mongoose.model('Recent', recentSchema)
module.exports = Recent