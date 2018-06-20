const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost/taskmanager', (err) => {
    if(err) throw err
    console.log('connected to the database')
})

app.use('/story', require('./routes/story'))

app.listen(5000, () => {
    console.log('sever is running on port 5000')
})