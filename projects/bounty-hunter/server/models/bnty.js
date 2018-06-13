const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  weapon: {
    type: String
  },
  payout: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('Bounty', bountySchema)