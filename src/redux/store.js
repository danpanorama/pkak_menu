// redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./reducers/orderReducer";
import errorReducer from "./reducers/errReducer";
import orderStatusReducer from "./reducers/orderStatusSlice";

const store = configureStore({
  reducer: {
    order: orderReducer,
    err:errorReducer,
     orderStatus: orderStatusReducer,
  },
});

export default store;
