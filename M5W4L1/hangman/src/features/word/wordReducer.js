import { getQueryParam, setQueryParam } from "./queryParams";

const initialState = getQueryParam();

export const wordReducer = (state = initialState, action) => {
  if (action.type === "SET_WORD") {
    setQueryParam(action.payload.word.toUpperCase());
    return action.payload.word.toUpperCase();
  }

  return state;
};
