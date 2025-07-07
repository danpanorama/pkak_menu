import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  totalPrice: 0,
};

const calculateTotalPrice = (data) => {
  return data.reduce((total, item) => {
    const price = item.price || 0;
    const quantity = item.quantity || 1;
    return total + price * quantity;
  }, 0);
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingIndex = state.data.findIndex(
        (orderItem) =>
          orderItem.name === item.name &&
          JSON.stringify(orderItem.extras?.sort()) === JSON.stringify(item.extras?.sort())
      );

      const quantityToAdd = item.quantity && Number.isFinite(item.quantity) ? item.quantity : 1;

      if (existingIndex >= 0) {
        state.data[existingIndex].quantity += quantityToAdd;
      } else {
        state.data.push({ ...item, quantity: quantityToAdd });
      }

      state.totalPrice = calculateTotalPrice(state.data);
    },

    removeItem: (state, action) => {
      const item = action.payload;
      const existingIndex = state.data.findIndex(
        (orderItem) =>
          orderItem.name === item.name &&
          JSON.stringify(orderItem.extras?.sort()) === JSON.stringify(item.extras?.sort())
      );

      if (existingIndex >= 0) {
        if (state.data[existingIndex].quantity > 1) {
          state.data[existingIndex].quantity -= 1;
        } else {
          state.data.splice(existingIndex, 1);
        }
      }

      state.totalPrice = calculateTotalPrice(state.data);
    },

    clearOrder: (state) => {
      state.data = [];
      state.totalPrice = 0;
    },

    updateItemQuantity: (state, action) => {
      const { name, extras, quantity } = action.payload;
      const existingIndex = state.data.findIndex(
        (orderItem) =>
          orderItem.name === name &&
          JSON.stringify(orderItem.extras?.sort()) === JSON.stringify(extras?.sort())
      );
      if (existingIndex >= 0 && quantity > 0) {
        state.data[existingIndex].quantity = quantity;
      }

      state.totalPrice = calculateTotalPrice(state.data);
    },
  },
});

export const { addItem, removeItem, clearOrder, updateItemQuantity } = orderSlice.actions;
export default orderSlice.reducer;
