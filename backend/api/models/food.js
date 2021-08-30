const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  Image: {
    type: String,
  },
  Name: {
    type: String,
    required: true,
  },
  Rating: {
    type: Number,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Discount: {
    type: Number,
  },
});

module.exports = mongoose.model("Food", foodSchema , "Food");
