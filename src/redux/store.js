// redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./reducers/orderReducer";
import errorReducer from "./reducers/errReducer";

const store = configureStore({
  reducer: {
    order: orderReducer,
    err:errorReducer
  },
});

export default store;
