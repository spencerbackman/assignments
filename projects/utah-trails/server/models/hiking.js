const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hikingSchema = new Schema({
    names: String,
    body: String,
    date: String,
    trail_id: {
      type: String,
      index: true,
      unique: true
    }
})

module.exports = mongoose.model("Hiking", hikingSchema);
