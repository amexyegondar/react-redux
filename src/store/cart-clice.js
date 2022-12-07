import { createSlice } from "@reduxjs/toolkit";
//import { uiActions } from "./ui-slice";

const cartSlice = createSlice({//accepts an initial state, an object of reducer functions,
  // and a "slice name", and automatically generates action
  // creators and action types that correspond to the reducers and state.
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    changed: false,
  },
  reducers: {
    replaceData(state, action) {
      //to set the datas back when rendering
      state.totalQuantity = action.payload.totalQuantity;
      state.itemsList = action.payload.itemsList;
    },
    addToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      // to check if item is already available
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {//to check if the item is selected before
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({ //if not selected before
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity++;//increase the quantity whatever is
      }
    },
    removeFromCart(state, action) {
      state.changed = true;
      const id = action.payload;

      const existingItem = state.itemsList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {//disappear from the form
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;//quantity of the current item decrease by one not totalitem decrese
        existingItem.totalPrice -= existingItem.price;
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;//set the 'showCart' negation to the current value
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;