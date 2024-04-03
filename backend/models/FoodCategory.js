// models/FoodCategory.js

const mongoose = require('mongoose');

const foodCategorySchema = new mongoose.Schema({
    CategoryName: String,
  // Add more fields as needed
});

const FoodCategory = mongoose.model('FoodCategory', foodCategorySchema,'food_category');

module.exports = FoodCategory;
