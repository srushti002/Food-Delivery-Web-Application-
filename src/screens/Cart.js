
import React from 'react';
import { connect } from 'react-redux';
import { removeItemFromCart } from '../components/cartSlice';
import { selectIsLoggedIn } from '../components/authSlice'; // Import the selectIsLoggedIn selector
import './Cart.css'; // Import your CSS file

const Cart = ({ cartItems, totalCost, dispatch, isLoggedIn }) => {
  const handleRemoveItem = (index) => {
    dispatch(removeItemFromCart(index));
  };

  const handlePlaceOrder = () => {
    if (isLoggedIn) {
      if (cartItems.length > 0) {
        alert('Order placed successfully!');
        window.location.href = '/'; // Redirect to the home page after placing the order
      } else {
        alert('Please add items to the cart first.');
      }
    } else {
      alert('Please log in to place the order.');
      // Redirect to the login page or show a login modal
      window.location.href = '/login'; // Redirect to the login page
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-content">
        <h2>Cart Items</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Size</th>
              <th>Total Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.foodName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.size}</td>
                  <td>{item.totalPrice}</td>
                  <td>
                    <button onClick={() => handleRemoveItem(index)}>Remove</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No items in the cart</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className='cart-row'>
        <p>Total Cost: {totalCost}</p>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
      </div>
      </div>
    
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  totalCost: state.cart.cartItems.reduce((total, item) => total + item.totalPrice, 0),
  isLoggedIn: selectIsLoggedIn(state), // Use the selectIsLoggedIn selector to get the authentication status
});

export default connect(mapStateToProps)(Cart);


