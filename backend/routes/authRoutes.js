// Import necessary modules
const express = require('express')
const router = express.Router()
const user = require('../models/user') // Import the User model (assuming it's defined in a separate file)
const { body, validationResult } = require('express-validator');

// Define the signup route
router.post('/authRoutes',
body('email').isEmail(),
body('username').isLength({ min: 5 }),
body('password','Incorrect password').isLength({ min: 5 })
, async (req, res) => {
  // Extract signup data from request body
 // const { username, email, password } = req.body;
 const errors = validationResult(req);
 if (!errors.isEmpty()) {
   return res.status(400).json({ errors: errors.array() });
 }
  try {
    // Check if the email is already registered
    // const existingUser = await user.findOne({ email });
    // if (existingUser) {
    //   return res.status(400).json({ error: 'Email is already registered' });
    await user.create({
      username :req.body.username,
      email:req.body.email,
      password:req.body.password
    })
    res.json({success:true});
    }

    // Create a new user record
    //const newUser = new user({ username, email, password });
    //await newUser.save();

    // Return success response
  //   res.status(201).json({ message: 'User registered successfully' });
  // } 
  catch (error) {
    console.error('Error creating user:', error);
    // res.status(500).json({ error: 'Internal server error' });
    res.json({success:false});
  }
});



router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await user.findOne({ email, password });
    if (!existingUser) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    // If user exists and password is correct
    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


// Export the router
module.exports = router;
