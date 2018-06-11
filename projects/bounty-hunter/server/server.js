const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const morgan = require('morgan');

app.use(bodyParser.json());
// app.use(morgan('dev'));

mongoose.connect("mongodb://localhost/bounty-hunter", (err) => {
  if(err) throw err;
  console.log("connected to the database")
})



app.use('/bounties', require('./routes/bounties'));

app.listen(8000, () => {
  console.log("server is running on port 8000")
})
