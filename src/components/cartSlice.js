


// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart(state, action) {
      state.cartItems.push(action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartItems.splice(action.payload, 1);
    },
    // Add other reducers as needed
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
