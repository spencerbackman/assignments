const express = require('express')
const inventoryRouter = express.Router()
const inventory = require('../models/inventory')

inventoryRouter.get('/', (req, res) => {
    inventory.find((err, items) => {
        if(err) return res.status(500).send(err)
        return res.status(200).send(items)
    })
})

inventoryRouter.post('/', (req,res) => {
    const newItem = new inventory(req.body)
    newItem.save((err, newItem) => {
        if(err) return res.status(500).send(err)
        return res.status(201).send(newItem)
    })
})

inventoryRouter.delete('/:id', (req, res) => {
    inventory.findByIdAndRemove(req.params.id, (err, deletedInventory) => {
        if(err) return res.status(500).send(err)
        return res.send({message: "item was succesfully deleted", deletedInventory})
    })
})

inventoryRouter.put('/:id', (req, res) => {
    inventory.findByIdAndUpdate(
        {_id: req.params.id },
        req.body,
        { new: true },
        (err, updatedInventory) => {
            if(err) return res.status(500).send(err)
            return res.send(updatedInventory)
    })
})

module.exports = inventoryRouter