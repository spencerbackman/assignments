const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hikingSchema = new Schema({
    name: String,
    body: String,
    date: String,
    trail_ids: String
})

module.exports = mongoose.model("Hiking", hikingSchema);
