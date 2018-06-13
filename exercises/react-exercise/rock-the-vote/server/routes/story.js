 const express = require('express')
 const storyRouter = express.Router()
 const Story = require('../models/story')

 storyRouter.get('/', (req, res) => {
     Story.find((err, story) => {
         if(err) return res.status(500).send(err)
         return res.status(200).send(story)
     })
 })

 storyRouter.post('/:id/comments', (req,res) => {
     Story.findByIdAndUpdate(
         req.params.id,
         {$push: {comments: req.body}},
         {new: true}, (err, updatedStory) => {
             if(err) return res.status(500).send(err)
             return res.send(updatedStory)
         }
     )
 })

 storyRouter.post('/', (req, res) => {
    const newStory = new Story(req.body)
    newStory.save((err, newStory) => {
        if(err) return res.status(500).send(err)
        return res.status(201).send(newStory)
    })
 })

 storyRouter.put('/:id', (req, res) => {
    Story.findByIdAndUpdate(
        {_id: req.params.id },
        req.body,
        {new: true},
        (err, updatedStory) => {
            if(err) return res.status(500).send(err)
            return res.send(updatedStory)
        }
    )
})

 storyRouter.delete('/:id', (req, res) => {
     Story.findByIdAndRemove(req.params.id, (err, deletedStory) => {
         if(err) return res.status(500).send(err)
         return res.send({ message: "story was sucesfully deleted", deletedStory})
     })
 })

 module.exports = storyRouter