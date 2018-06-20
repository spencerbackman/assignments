const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost/taskmanager', err => {
    if(err) throw err
    console.log('connected to the database')
})

app.use("/hiking", require('./routes/hiking'))

app.listen(7000, () => {
    console.log('server is runnin on port 7000')
})
