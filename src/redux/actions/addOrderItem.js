// redux/actions/orderActions.js

// import axios from "axios";
import { ADD_ORDER_ITEM, ERROR } from "../context/types";

export const addOrderItem = (item) => async (dispatch) => {
  try {
    // const { data } = await axios.post("/api/orders", item, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    console.log(item)

    dispatch({
      type: ADD_ORDER_ITEM,
      data: { item },
    });
  } catch (error) {
    const serverResponse = error.response?.data;

    dispatch({
      type: ERROR,
      payload: {
        header: serverResponse?.header || "שגיאה",
        message: serverResponse?.message || "אירעה שגיאה בלתי צפויה.",
      },
    });
  }
};
