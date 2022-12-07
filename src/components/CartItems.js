import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";//Allows you to extract data from the Redux store state, using a selector function.
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);//select itemsList arry to assign it another variable
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {" "}
            < CartItem //call the imported component function to send the mapped data to it.
            //the error happened here but i fix by importing
              quantity={item.quantity}
              id={item.id}
              price={item.price}//these datas pass to the function in CartItem.js
              total={item.totalPrice}
              name={item.name}
            />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;//export this function to import in other component