import { cartActions } from "./cart-clice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {//mark the function as the async
         //fetch request
      const res = await fetch(//it is say like hey fetch request go head and do your thing I will 
      //wait for you to return that back to me


        "https://react-redux2-3784c-default-rtdb.firebaseio.com/cartItems.json"//url of firebase
      );
      const data = await res.json();//this htttp response need to be converted to json
      //await keyword can only be used inside of a function
      // marked with async, otherwise it will give you a SyntaxError.
      return data;//return promise data 
    };
    try {
      const cartData = await fetchHandler();//try this code, call the function that return data and assign to cartData
      
      dispatch(cartActions.replaceData(cartData));//take cartData ass parameter which contain data response from firebase
    } catch (err) {//catch error and show 'failed' notification 
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending Request To Database!",
        type: "warning",
      })
    );
    const sendRequest = async () => {
      // Send state as Sending request

      await fetch(//store data in the firebase by http request
        "https://react-redux2-3784c-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      //const data = await res.json();
      // Send state as Request is successful
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Request Sent Successfully!!",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();//execute the code if the error not happened
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    }
  };
};