const express = require("express");
const router = express.Router();
const controller = require("../controller/food.controller");

//GET all food
router.get("/food", controller.getAllData);
router.get("/restaurants", controller.getRestaurants);
module.exports = router;
