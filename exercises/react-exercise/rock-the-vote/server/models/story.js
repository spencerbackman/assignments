const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    votes: {
        type: Number
    },
    comments: [{
        name: String,
        body: String
    }]
})

module.exports = mongoose.model("Story", storySchema)