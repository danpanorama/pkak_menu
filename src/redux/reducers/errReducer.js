// redux/reducers/errReducer.js

import { ERROR, CLEAR_ERROR } from "../context/types";

const initialState = {
  header: "",
  message: "",
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        header: action.payload.header,
        message: action.payload.message,
      };
    case CLEAR_ERROR:
      return initialState; // מאפס הכל
    default:
      return state;
  }
}
