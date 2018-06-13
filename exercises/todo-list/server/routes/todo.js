const express = require('express');
const todoRouter = express.Router();
const Todo = require('../models/todo');


todoRouter.get('/', (req, res) => {
    Todo.find((err, todos) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send(todos);
    })
})

todoRouter.post('/', (req, res) => {
    const newTodo = new Todo(req.body);
    newTodo.save((err, newTodo) => {
        if(err) return res.status(500).send(err);
        return res.status(201).send(newTodo);
    })
})

todoRouter.get('/:id', (req, res) => {
    
})

todoRouter.put('/:id', (req, res) => {
    Todo.findByIdAndUpdate(
        { _id: req.params.id }, 
        req.body, 
        {new: true},
        (err, updatedTodo) => {
            if(err) return res.status(500).send(err);
            return res.send(updatedTodo)
        })
})

todoRouter.delete('/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, deletedTodo) => {
        if(err) return res.status(500).send(err);
        return res.send({ message: "todo was successfully deleted", deletedTodo })
    })
})

module.exports = todoRouter;