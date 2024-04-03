// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   items: [
//     {
//       name: { type: String, required: true },
//       quantity: { type: Number, required: true },
//       price: { type: Number, required: true },
//     }
//   ],
//   totalCost: { type: Number, required: true },
//   timestamp: { type: Date, default: Date.now },
// });

// const Order = mongoose.model('Order', orderSchema);

// module.exports = Order;



// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Assuming userId is the user's email
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    }
  ],
  totalCost: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
