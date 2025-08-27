import { addItem, removeItem } from "../redux/reducers/orderReducer";

// תמיד מוסיף אחד
export const addToCart = (dispatch, item) => {
  const cleanItem = {
    ...item,
    quantity: 1,
    Origin_Id:Date.now().toString() + Math.floor(Math.random() * 1000), // מזהה ייחודי
  };
  dispatch(addItem(cleanItem));
};

// תמיד מוריד אחד
export const removeFromCart = (dispatch, item) => {
  dispatch(removeItem(item));
};
