// const express = require('express')
// const router = express.Router()


// router.post('/foodData',(req,res)=>{
// try{
//     console.log(FoodItems)
//     res.send([FoodItems])
// }catch(error){
//     console.error(error.message);
//     res.send("server error")
// }
// })

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// //const FoodItem = require('../models/FoodItem'); // Assuming you have a FoodItem model defined

// router.post('/foodData', async (req, res) => {
//   try {
//     // Fetch data from the FoodItem collection
//     const foodItems = await FoodItem.find({}).exec();
//     res.send(foodItems);
//     console.log('Fetched food items:', foodItems);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Server Error');
//   }
// });

// module.exports = router;
// routes/DisplayData.js

// const express = require('express');
// const router = express.Router();
// const FoodItem = require('../models/FoodItem');

// router.post('/foodData', async (req, res) => {
//   try {
//     // Fetch data from the FoodItem collection
//     const foodItems = await FoodItem.find({}).exec();
//     res.send(foodItems);
//     console.log(foodItems);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Server Error');
//   }
// });

// module.exports = router;

// routes/DisplayData.js

const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');
const FoodCategory = require('../models/FoodCategory');

router.post('/foodData', async (req, res) => {
  try {
    // Fetch data from the FoodItem collection
    const foodItems = await FoodItem.find({}).exec();

    // Fetch data from the FoodCategory collection
    const foodCategories = await FoodCategory.find({}).exec();
    //console.log('Fetched food categories:', foodCategories);
    // Combine the data into a single object or array
    const combinedData = {
      foodItems,
      foodCategories,
    };

    // Send the combined data as a JSON response
    res.json(combinedData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const FoodItem = require('../models/FoodItem');
// const FoodCategory = require('../models/FoodCategory');

// router.post('/foodData', async (req, res) => {
//   try {
//     // Fetch data from the FoodItem collection
//     const foodItems = await FoodItem.find({}).exec();

//     // Fetch data from the FoodCategory collection
//     const foodCategories = await FoodCategory.find({}).exec();

//     // Transform foodItems data to match Card component's props structure
//     const transformedFoodItems = foodItems.map(item => ({
//       foodName: item.name,
//       item,
//       options: item.options.map(option => ({ size: option.size, price: option.price })),
//       ImgSrc: item.img
//     }));

//     // Combine the data into a single object or array
//     const combinedData = {
//       foodItems: transformedFoodItems,
//       foodCategories,
//     };

//     // Send the combined data as a JSON response
//     res.json(combinedData);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).send('Server Error');
//   }
// });

// module.exports = router;





// router.post('/foodData', async (req, res) => {
//   try {
//     // Fetch data from the FoodItem collection
//     const foodItems = await FoodItem.find({}).exec();

//     // Fetch data from the FoodCategory collection
//     const foodCategories = await FoodCategory.find({}).exec();

//     // Combine the data into a single object or array
//     const combinedData = {
//       foodItems,
//       foodCategories,
//     };

//     // Send the combined data as a JSON response
//     res.json(combinedData);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Server Error' }); // Send a JSON error response
//   }
// });
// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const FoodItem = require('../models/FoodItem');
// const FoodCategory = require('../models/FoodCategory');

// router.post('/foodData', async (req, res) => {
//   try {
//     // Fetch data from the FoodItem collection
//     const foodItems = await FoodItem.find({}).exec();

//     // Fetch data from the FoodCategory collection
//     const foodCategories = await FoodCategory.find({}).exec();

//     // Combine the data into a single object or array
//     const combinedData = {
//       foodItems,
//       foodCategories,
//     };

//     // Send the combined data as a JSON response
//     res.json(combinedData);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     // Send a meaningful error response with appropriate HTTP status code
//     res.status(500).json({ error: 'Server Error' });
//   }
// });

// module.exports = router;



// const express = require('express');
// const router = express.Router();
// const FoodItem = require('../models/FoodItem');
// const FoodCategory = require('../models/FoodCategory');

// router.post('/foodData', async (req, res) => {
//   try {
//     // Fetch food items and categories efficiently using lookup
//     const foodItems = await FoodItem.find({}).populate('categoryName');

//     // Optionally, fetch categories separately if needed
//     // const foodCategories = await FoodCategory.find({});

//     // Group food items by category using reduce
//     const groupedData = foodItems.reduce((acc, item) => {
//       const categoryName = item.category.categoryName; // Assuming "CategoryName" field
//       acc[categoryName] = acc[categoryName] || [];
//       acc[categoryName].push(item);
//       return acc;
//     }, {}); // Initial empty accumulator

//     // Send the grouped data as a JSON response
//     res.json(groupedData);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).send('Server Error');
//   }
// });

// module.exports = router;
