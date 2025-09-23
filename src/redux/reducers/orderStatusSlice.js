import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  globalStatus: "idle", // idle | loading | pending | delivered
};
const orderStatusSlice = createSlice({
  name: "orderStatus",
  initialState,
  reducers: {
    startOrder: (state, action) => {
      state.orders.push({
        id: action.payload.id,
        status: "loading",
        countdown: action.payload.eta,
      });
      state.globalStatus = "loading";
    },
    orderPending: (state, action) => {
      const order = state.orders.find(o => o.id === action.payload.id);
      if(order){
        order.status = "pending";
        state.globalStatus = "pending";
      }
    },
    completeOrder: (state, action) => {
      const order = state.orders.find(o => o.id === action.payload.id);
      if(order){
        order.status = "delivered";
        state.globalStatus = "delivered";
      }
    },
    cancelOrder: (state, action) => {
      state.orders = state.orders.filter(o => o.id !== action.payload.id);
      state.globalStatus = state.orders.length ? state.orders[0].status : "idle";
    },
  },
});


export const { startOrder, orderPending, completeOrder, cancelOrder } = orderStatusSlice.actions;
export default orderStatusSlice.reducer;
