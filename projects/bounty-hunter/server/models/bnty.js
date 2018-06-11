const mongoose = require("mongoose");

const bountySchema = new mongoose.Schema({
  name: String,
  weapon: String
})

module.exports  = mongoose.model("Bounty", bountySchema);
