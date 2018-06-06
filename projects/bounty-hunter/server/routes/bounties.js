const express = require('express');
const uuid = require('uuid/v1');
const bountyRoutes = express.Router();

const bounties = [
  {name: 'Boba Fett', weapon: 'blaster', id: 1},
  {name: 'Darth Vador', weapon: 'lightsaber', id: 2},
  {name: 'Kylo Ren', weapon: 'lightsaber', id: 3},
  {name: 'Han Solo', weapon: 'blaster', id:4}
]

bountyRoutes.route('/')
.get((req, res) => {
  res.send(bounties)
})
.post((req, res) => {
  req.body.id = uuid();
  bounties.push(req.body);
  res.send(req.body);
})

bountyRoutes.route('/:id')
.get((req, res) => {
  const foundBounty = bounties.find(bounty => bounty.id === parseInt(req.params.id))
  res.send(foundBounty);
})
.put((req, res) => {
  const foundBounty = bounties.find(bounty => bounty.id === parseInt(req.params.id))
  const newBounty = Object.assign(foundBounty, req.body);
  res.send(req.body);
})
.delete((req, res) => {
  const foundBounty = bounties.find(bounty => bounty.id === parseInt(req.params.id))
  const index = bounties.indexOf(foundBounty)
  bounties.splice(index, 1);
  res.send("You've succesfully deleted the bounty")
})





module.exports = bountyRoutes;
