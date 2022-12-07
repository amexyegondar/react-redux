import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-clice";//the exported actions of CartSlice function in cart-clice
import "./Cart.css";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();//This hook returns a reference to the dispatch function from the Redux store.
  const incrementCartItem = () => {
    dispatch(
      cartActions.addToCart({//used to add existing item quantity to when + button clicked 
        name,
        id,
        price,
      })
    );
  };
  const decrementCartItems = () => {//used to minimize existing item quantity to when - button clicked 
    dispatch(cartActions.removeFromCart(id));
  };
  return (//display the selected items' quantity and total price in the form of table
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button onClick={decrementCartItems} className="cart-actions">
        -
      </button>
      <button onClick={incrementCartItem} className="cart-actions">
        +
      </button>
    </div>
  );
};

export default CartItem;//exported to expose the function in other components