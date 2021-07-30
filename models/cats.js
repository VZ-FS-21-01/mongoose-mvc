const mongoose = require('mongoose')
const Schema = mongoose.Schema

const catSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    }
}, { timestamps: true })

// mongoose wandelt den String in Kleinbuchstaben um!!!!
const Cat = mongoose.model('cat', catSchema)

module.exports = Cat