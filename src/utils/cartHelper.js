import { addItem } from "../redux/reducers/orderReducer";

export const addToCart = (dispatch, item) => {
  const cleanItem = {
    ...item,
    quantity: item.quantity && Number.isFinite(item.quantity) ? item.quantity : 1,
  };
  dispatch(addItem(cleanItem));
};
