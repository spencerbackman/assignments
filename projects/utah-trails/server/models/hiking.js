const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hikingSchema = new Schema({
  comments: [{
    names: String,
    body: String
  }],
    trail_id: {
      type: String,
      index: true,
      unique: true
    }
})

module.exports = mongoose.model("Hiking", hikingSchema);
