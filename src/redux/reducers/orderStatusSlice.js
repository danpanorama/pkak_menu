import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle", // idle | loading | pending | delivered
  orderData: null, // פרטי ההזמנה
  countdown: 0,    // זמן משוער בדקות
};

const orderStatusSlice = createSlice({
  name: "orderStatus",
  initialState,
  reducers: {
    startOrder: (state) => {
        console.log('hhhhh')
      state.status = "loading"; // הכפתור נלחץ – מראה טעינה
    },
    orderPending: (state, action) => {
      state.status = "pending";       // ההזמנה התקבלה
      state.orderData = action.payload;
      state.countdown = action.payload.eta; // זמן משוער לדוגמה
    },
    completeOrder: (state) => {
      state.status = "delivered";    // ההזמנה הגיעה
    },
    cancelOrder: (state) => {
      state.status = "idle";         // ביטול / חזרה למצב רגיל
      state.orderData = null;
      state.countdown = 0;
    },
  },
});

export const { startOrder, orderPending, completeOrder, cancelOrder } = orderStatusSlice.actions;
export default orderStatusSlice.reducer;
