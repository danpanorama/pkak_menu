import { addItem, removeItem } from "../redux/reducers/orderReducer";

// תמיד מוסיף אחד
export const addToCart = (dispatch, item) => {
  const cleanItem = {
    ...item,
    quantity: 1,
  };
  dispatch(addItem(cleanItem));
};

// תמיד מוריד אחד
export const removeFromCart = (dispatch, item) => {
  dispatch(removeItem(item));
};
