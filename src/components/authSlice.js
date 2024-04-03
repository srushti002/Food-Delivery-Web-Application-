// authSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isLoggedIn: false,
//   user: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginSuccess(state, action) {
//       state.isLoggedIn = true;
//       state.user = action.payload;
//     },
//     logoutSuccess(state) {
//       state.isLoggedIn = false;
//       state.user = null;
//     },
//   },
// });

// export const { loginSuccess, logoutSuccess } = authSlice.actions;

// // Export the selectors
// export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
// export const selectUser = (state) => state.auth.user;

// export default authSlice.reducer;


// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logoutSuccess(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

// Selector to get the user's email from the state
export const selectUserEmail = state => state.auth.user ? state.auth.user.email : null;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export default authSlice.reducer;
