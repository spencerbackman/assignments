const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use('/food', require('./routes/food'));

app.listen(8300, () => {
    console.log("server is running on port 8300")
})