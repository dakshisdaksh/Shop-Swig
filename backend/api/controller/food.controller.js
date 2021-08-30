const Food = require("../models/food");
const Restaurant = require("../models/restaurant");

exports.getAllData = async (req, res, next) => {
  console.log("hello");
  try {
    const response = await Food.find({});
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getRestaurants = async (req, res, next) => {
  try {
    const response = await Restaurant.find({});
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
  }
};
