import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  totalPrice: 0,
};

// חישוב מחיר כולל
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
    // ✅ הוספת פריט חדש – תמיד לפי Origin_Id
    addItem: (state, action) => {
      const item = action.payload;
      const quantityToAdd =
        item.quantity && Number.isFinite(item.quantity) ? item.quantity : 1;

      const existingIndex = state.data.findIndex(
        (orderItem) => orderItem.Origin_Id === item.Origin_Id
      );

      if (existingIndex >= 0) {
        state.data[existingIndex].quantity += quantityToAdd;
      } else {
        state.data.push({ ...item, quantity: quantityToAdd });
      }

      state.totalPrice = calculateTotalPrice(state.data);
    },

    // ✅ הסרת פריט לפי Origin_Id
    removeItem: (state, action) => {
      const item = action.payload;

      const existingIndex = state.data.findIndex(
        (orderItem) => orderItem.Origin_Id === item.Origin_Id
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

    // ✅ ניקוי כל העגלה
    clearOrder: (state) => {
      state.data = [];
      state.totalPrice = 0;
    },

    // ✅ עדכון כמות ידני לפי Origin_Id
    updateItemQuantity: (state, action) => {
      const { Origin_Id, quantity } = action.payload;

      const existingIndex = state.data.findIndex(
        (orderItem) => orderItem.Origin_Id === Origin_Id
      );

      if (existingIndex >= 0 && quantity > 0) {
        state.data[existingIndex].quantity = quantity;
      }

      state.totalPrice = calculateTotalPrice(state.data);
    },

    // ✅ עדכון תוספות (Extras) לפי Origin_Id
    updateItemExtras: (state, action) => {
      const { Origin_Id, newExtras } = action.payload;

      const existingIndex = state.data.findIndex(
        (orderItem) => orderItem.Origin_Id === Origin_Id
      );

      if (existingIndex >= 0) {
        state.data[existingIndex].extras = newExtras;
      }

      state.totalPrice = calculateTotalPrice(state.data);
    },

    // ✅ אפשרות להוסיף צ’ייסר / dealShot לפריט לפי Origin_Id
    updateItemDealShot: (state, action) => {
      const { Origin_Id, dealShot } = action.payload;
console.log(action.payload)
      const existingIndex = state.data.findIndex(
        (orderItem) => orderItem.Origin_Id === Origin_Id
      );

      if (existingIndex >= 0) {
        state.data[existingIndex].deal = dealShot;
      }

      state.totalPrice = calculateTotalPrice(state.data);
    },
  },
});

export const {
  addItem,
  removeItem,
  clearOrder,
  updateItemQuantity,
  updateItemExtras,
  updateItemDealShot,
} = orderSlice.actions;

export default orderSlice.reducer;
