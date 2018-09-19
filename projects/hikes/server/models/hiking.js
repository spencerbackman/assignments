const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hikingSchema = new Schema({
    comments: [{
        name: String,
        body: String
    }]
})

module.exports = mongoose.model("Hiking", hikingSchema);
