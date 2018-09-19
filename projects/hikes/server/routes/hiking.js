const express = require('express');
const hikeRouter = express.Router();
const Hiking = require('../models/hiking');
const axios = require('axios')

hikeRouter.get('/', (req, res) => {
  Hiking.find((err, hiking) => {
    if(err) return res.status(500).send(err)
    return res.status(200).send(hiking)
  })
})

hikeRouter.get('/trail_ids', (req, res) => {
  const header = {"X-Mashape-Key": "KiT9MoqX2cmsh2R0Fzkd5ctqjF0Ap19flmjjsnKiZ4rSLeRCfe"}
  axios.get('https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[state_cont]=utah', {headers: header}).then(response => {
    res.send(response.data)
  })
})

hikeRouter.post('/comments', (req, res) => {
  Hiking.findByIdAndUpdate(
    {_id: req.params.id},
    {$push: {comments: req.body}},
    {new: true},
    (err, updatedHikes) => {
      if(err) return res.status(500).send(err);
      return res.send(updatedHikes);
    }
  )
})

// hikeRouter.post('/', (req, res) => {
//   const newHike = new Hiking(req.body)
//   newHike.save((err, newHike) => {
//     if(err) return res.status(500).send(err);
//     return res.status(201).send(newHike);
//   })
// })

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
