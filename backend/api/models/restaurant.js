const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  address: { 
      building:{ type: Number, required: false },
      street: { type: String, required: false},
      zipcode: { type: String, required: false}
   },
  cuisine: { type: String, required: false },
  grades: [
    {
      date: { type: Date, required: false },
      grade: { tyoe: String, required: false },
      score: { type: Number, required: false },
    },
  ],
  name: { type: String, required: true },
  image: { type: String, required: false },
});

module.exports = mongoose.model("restaurants", restaurantSchema , "restaurants");