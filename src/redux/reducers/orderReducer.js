import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [], // כאן יאוחסנו כל הפריטים שהוזמנו
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // action.payload => {name, price, extras, quantity, ...}
      const item = action.payload;
      // לבדוק אם כבר קיים פריט כזה עם אותם אקסטרות
      const existingIndex = state.data.findIndex(
        (orderItem) =>
          orderItem.name === item.name &&
          JSON.stringify(orderItem.extras?.sort()) === JSON.stringify(item.extras?.sort())
      );

      if (existingIndex >= 0) {
        // אם הפריט קיים, להגדיל כמות
        state.data[existingIndex].quantity += item.quantity;
      } else {
        // אם חדש, להוסיף להזמנה עם quantity
        state.data.push({ ...item, quantity: item.quantity || 1 });
      }
    },

    removeItem: (state, action) => {
      // action.payload => {name, extras}
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
          // להסיר פריט מההזמנה אם quantity מגיע ל-0
          state.data.splice(existingIndex, 1);
        }
      }
    },

    clearOrder: (state) => {
      state.data = [];
    },

    updateItemQuantity: (state, action) => {
      // action.payload => {name, extras, quantity}
      const { name, extras, quantity } = action.payload;
      const existingIndex = state.data.findIndex(
        (orderItem) =>
          orderItem.name === name &&
          JSON.stringify(orderItem.extras?.sort()) === JSON.stringify(extras?.sort())
      );
      if (existingIndex >= 0 && quantity > 0) {
        state.data[existingIndex].quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, clearOrder, updateItemQuantity } = orderSlice.actions;
export default orderSlice.reducer;
