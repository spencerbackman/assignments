const express = require('express');
const foodRoutes = express.Router();


foodRoutes.route('/')
.get((req, res, next) => {
    food.find((err, foods))
})