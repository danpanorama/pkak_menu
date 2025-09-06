// redux/actions/orderActions.js

// import axios from "axios";
import { ADD_ORDER_ITEM, ERROR,UPDATE_DEAL } from "../context/types";

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


// export const updateDealOrderAction = (data) => async (dispatch) => {
//   try {
// console.log(data,"here you go ")
//     dispatch({
//       type: UPDATE_DEAL,
//       data: { data },
//     });
//   } catch (error) {
//     const serverResponse = error.response?.data;
//     dispatch({
//       type: ERROR,
//       payload: {
//         header: serverResponse?.header || "שגיאה",
//         message: serverResponse?.message || "אירעה שגיאה בלתי צפויה.",
//       },
//     });
//   }
// };

export const updateDealOrderAction = (data) => async (dispatch) => {
  try {
    // שולח לרדיוסר את המידע כדי לעדכן את dealShot
    dispatch({
      type: 'order/updateItemDealShot', // שם הפונקציה ברדיוסר
      payload: {
        Origin_Id: data.Origin_Id,
        dealShot: data.deal, // זה בדיוק מה שאתה קורא לו ב- popup
      },
    });

    console.log(data,"here you go");
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
