
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST request to place a new order
router.post('/orders', async (req, res) => {
  try {
    console.log('Received POST request to /api/orders');

    // Validate request body (example validation, adjust as needed)
    if (!req.body.userId || !Array.isArray(req.body.items)) {
      return res.status(400).json({ message: 'Invalid request body' });
    }

    const { userId, items } = req.body;
    const totalCost = items.reduce((acc, item) => acc + item.quantity * item.price, 0); // Calculate total cost

    const newOrder = new Order({ userId, items, totalCost });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
