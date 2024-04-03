

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from './cartSlice';
import './Card.css'; 

const Card = ({ foodName, options = [], ImgSrc, dispatch, category }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
    calculateTotalPrice(parseInt(e.target.value), size);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
    calculateTotalPrice(quantity, e.target.value);
  };

  const calculateTotalPrice = (qty, selectedSize) => {
    const selectedOption = options.find((opt) => opt.size === selectedSize);
    if (selectedOption) {
      setTotalPrice(selectedOption.price * qty);
    } else {
      setTotalPrice(0);
    }
  };

  const addToCart = () => {
    console.log('Adding to cart:', { foodName, quantity, size, totalPrice });
    if (quantity > 0 && size !== '') {
      const item = { foodName, quantity, size, totalPrice };
      dispatch(addItemToCart(item));
      setQuantity(1);
      setSize('');
      setTotalPrice(0);
      alert('Item added to cart');
    } else {
      alert('Please select quantity and size before adding to cart.');
    }
  };

  return (
    <div className="card" style={{ display: 'inline-block', margin: '10px' }}>
      <img src={ImgSrc || 'https://via.placeholder.com/150'} className="card-img-top" alt="Food Item" />
      <div className="card-body">
        <h5 className="card-title">{foodName}</h5>
        <div className="form-group">
          <label htmlFor="quantitySelect" style={{ marginRight: '10px' }}></label>
          <select
            className="form-control"
            id="quantitySelect"
            value={quantity}
            onChange={handleQuantityChange}
          >
            {[1, 2, 3, 4, 5, 6].map((qty) => (
              <option key={qty} value={qty}>{qty}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="sizeSelect" style={{ marginRight: '10px' }}></label>
          <select
            className="form-control"
            id="sizeSelect"
            value={size}
            onChange={handleSizeChange}
          >
            <option value="">Size</option>
            {options.map((opt) => (
              <option key={opt.size} value={opt.size}>{opt.size}</option>
            ))}
          </select>
        </div>
        <p>Total Price: ₹{totalPrice}</p>
        <button className="btn btn-success" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default connect()(Card);


