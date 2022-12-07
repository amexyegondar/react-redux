import { createSlice } from "@reduxjs/toolkit";//first install redux toolkit

const authSlice = createSlice({//accepts an initial state, an object of reducer functions, and a 
  //"slice name", and automatically generates action 
  //creators and action types that correspond to the reducers and state.
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {//
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;