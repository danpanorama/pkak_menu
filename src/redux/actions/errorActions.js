import { ERROR, CLEAR_ERROR } from "../context/types";

export const setError = (header, message) => ({
  type: ERROR,
  payload: { header, message },
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});
