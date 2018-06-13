const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bnty')


bountyRouter.get('/', (req, res) => {
  Bounty.find((err, bounties) => {
    if(err) return res.status(500).send(err)
    return res.status(200).send(bounties)
  })
})

bountyRouter.post('/', (req, res) => {
  const newBounty = new Bounty(req.body)
  newBounty.save((err, newBounty) => {
    if(err) return res.status(500).send(err)
    return res.status(201).send(newBounty)
  })
})

bountyRouter.delete('/:id', (req, res) => {
  Bounty.findByIdAndRemove(req.params.id, (err, deletedBounty) => {
    if(err) return res.status(500).send(err)
    return res.send({ message: "bounty was succesfully killed", deletedBounty})
  })
})

bountyRouter.put('/:id', (req, res) => {
  Bounty.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    {new: true},
    (err, updatedBounty) => {
      if(err) return res.status(500).send(err);
      return res.send(updatedBounty)
    }
  )
})

module.exports = bountyRouter
