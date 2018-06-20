const express = require('express');
const hikeRouter = express.Router();
const Hiking = require('../models/hiking');

hikeRouter.get('/', (req, res) => {
  Hiking.find((err, hiking) => {
    if(err) return res.status(500).send(err)
    return res.status(200).send(hiking)
  })
})

hikeRouter.post('/', (req, res) => {
  const newHike = new Hiking(req.body)
  newHike.save((err, newHike) => {
    if(err) return res.status(500).send(err);
    return res.status(201).send(newHike);
  })
})

hikeRouter.put('/:id', (req, res) => {
  Hiking.findByIdAndUpdate(
    {_id: req.params.id},
    req.body,
    {new: true},
    (err, updateHikes) => {
      if(err) return res.status(500).send(err);
      return res.send(updateHikes);
    }
  )
})

hikeRouter.delete('/:id', (req, res) => {
  Hiking.findByIdAndRemove(
    req.params.id,
    (err, deletedhike) => {
      if(err) return res.status(500).send(err);
      return res.send({message: "hike was succesfully deleted", deletedhike})
    }
  )
})

module.exports = hikeRouter;
