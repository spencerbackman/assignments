const express = require('express');
const bountyRoutes = express.Router();
const Bounty = require("../models/bnty")


bountyRoutes.route('/')
.get((req, res) => {
  Bounty.find((err, bounties) => {
    if(err) return res.status(500).send(err);
    return res.send(bounties)
  })
})
.post((req, res) => {
  const newBounty = new Bounty(req.body);
  newBounty.save((err, savedBounty) => {
      if(err) return res.status(500).send(err);
      return res.send(savedBounty)
  })
})

bountyRoutes.route('/:id')
.get((req, res) => {
  Bounty.findOne({ _id: req.params.id }, (err, foundBounty) => {
        if(err) return res.status(500).send(err);
        return res.send(foundBounty);
  })
})
.put((req, res) => {
  Bounty.findByIdAndUpdate(req.params.id, req.body, (err, updatedBounty) => {
    if(err) return res.status(500).send(err);
    return res.status(201).send(updatedBounty)
  })
})
.delete((req, res) => {
  Bounty.findByIdAndRemove(req.params.id, (err, removedBounty) => {
    if(err) return res.status(500).send(err);
    return res.send(removedBounty)
  })
})

module.exports = bountyRoutes;
