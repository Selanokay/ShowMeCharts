const mongoose = require('mongoose')

const Schema = mongoose.Schema

const musicinfoSchema = new Schema({
    endTime: {
        type: String,
        required: true
    },
    artistName: {
        type: String,
        required: true
    },
    trackName: {
        type: String,
        required: true
    },
    msPlayed: {
        type: String,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model('musicinfo', musicinfoSchema)