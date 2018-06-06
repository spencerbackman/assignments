const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid/v1");

const flower = [
  {strain: 'blue dream', type: 'sativa hybrid'},
  {strain: 'white widow', type: 'indica hybrid'},
  {strain: 'headband', type: 'sativa'},
  {strain: 'bubba og', type: 'indica'}
]

app.get("/flower",(req, res) => {
  res.send(flower)
})

app.use(bodyParser.json());


app.listen(8100, () => {
  console.log("servers running on port 8100")
})
