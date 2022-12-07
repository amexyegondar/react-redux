import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchData, sendCartData } from "./store/cart-actions";
//import { uiActions } from "./store/ui-slice";
let isFirstRender = true;
function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);//select notification object in the ui-slice
  const cart = useSelector((state) => state.cart);//select cart state in the cart-clice
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);//select isLoggedIn parameter to 
  //check either is true or false

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);//restore data when refreshing/render
  useEffect(() => {
    if (isFirstRender) {//to stop show notification in every render
      isFirstRender = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));//send cart data to firebase when the change happened
      //either add or remove
    }
  }, [cart, dispatch]);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />/* if isLoggedIn is false Auth is visible*/}
      {isLoggedIn && <Layout /> /* if isLoggedIn is true route to layout component*/}
      
    </div>
  );
}

export default App;