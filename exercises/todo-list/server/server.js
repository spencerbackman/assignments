const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(bodyParser.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost/taskmanager', (err) => {
    if(err) throw err;
    console.log("connected to the database")
})

app.use('/todo', require('./routes/todo'))


app.listen(6969, () => {
    console.log('sever is running on port 6969')
})