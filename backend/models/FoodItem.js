// // models/FoodItem.js

// const mongoose = require('mongoose');

// // Define FoodItem schema
// const foodItemSchema = new mongoose.Schema({
//   categoryName: String,
//   name: String,
//   img: String,
//   options: Array,
//   // Add more fields as needed
// });

// // Create FoodItem model
//const FoodItem = mongoose.model('FoodItem', foodItemSchema);

//module.exports = FoodItem;

const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  categoryName: String,
  name: String,
  img: String,
  options: Array,
  // Add more fields as needed
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema, 'food_items');

module.exports = FoodItem;


// const mongoose = require('mongoose');

// const foodItemSchema = new mongoose.Schema({
//   categoryName: {
//     type: mongoose.Schema.Types.ObjectId, // Reference to FoodCategory model
//     ref: 'FoodCategory', // Reference the model name
//   },
//   name: String,
//   img: String,
//   options: Array,
//   // Add more fields as needed
// });

// const FoodItem = mongoose.model('FoodItem', foodItemSchema, 'food_items');

// module.exports = FoodItem;
