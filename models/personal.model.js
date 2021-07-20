const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personalSchema = new Schema({
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


const Personal = mongoose.model('Personal', personalSchema)
module.exports = Personal