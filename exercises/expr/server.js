const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const uuidv1 = require("uuid/v1");

const dogs = [
  {name: 'baloo', type: 'bernadoodle', age: 1, id: '1'},
  {name: 'wilson', type: 'poodle', age: .75, id: '2'}
]

app.use(bodyParser.json());

app.get("/dogs", (req, res) => {
  res.send(dogs)
});

app.get("/dogs/:id", (req, res) => {
  const foundDog = dogs.find(dog => dog.id === req.params.id)
  res.send(foundDog);
})

app.post("/dogs", (req, res) => {
  req.body.id = uuidv1();
  dogs.push(req.body);
  res.send(req.body);
});

app.listen(8000, () => {
  console.log("server is running on port 8000")
});
