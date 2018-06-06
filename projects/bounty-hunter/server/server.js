const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid/v1');


app.use(bodyParser.json());
app.use('/bounties', require('./routes/bounties'));


app.listen(8500, () => {
  console.log("server is running on port 8500")
})
