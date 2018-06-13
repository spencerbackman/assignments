const mongoose = require('mongoose')
const Schema = mongoose.Schema

const invetorySchema = new Schema({
    item: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
})

module.exports = mongoose.model('inventory', invetorySchema)