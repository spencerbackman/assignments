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

<<<<<<< HEAD
app.use((req, res, next) => {
  req.dinosaur = "T-rex";
  next();
})

app.use((req, res, next) => {
  console.log(req.dinosaur)
  next();
})

=======
>>>>>>> 1e8af8255f45fb48aa24279e219b5f259d59ea71
app.get("/flower",(req, res) => {
  res.send(flower)
})

app.use(bodyParser.json());


app.listen(8100, () => {
  console.log("servers running on port 8100")
})
