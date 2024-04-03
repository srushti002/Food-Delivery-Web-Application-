

const mongoose = require('mongoose');
require('dotenv').config();

// Define a schema for the food items
const foodItemSchema = new mongoose.Schema({

  categoryName: String,
  name:String,
  img:String,
  options:Array
  // Add more fields as needed
});

// Define a model based on the schema
const FoodItem = mongoose.model('food_items', foodItemSchema);

async function fetchData() {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(process.env.mongo_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to database');

    // Fetch data from the "food_items" collection
    //const foodItems = await FoodItem.find({}).exec();
    
    //console.log('Fetched food items:', foodItems);
    // Process the fetched food items as needed
  } catch (error) {
    console.error('Could not connect to the database:', error);
  }
}

fetchData();
