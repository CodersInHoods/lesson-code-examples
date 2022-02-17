const initialState = null;

export const wordReducer = (state = initialState, action) => {
  if (action.type === "SET_WORD") {
    return action.payload.word;
  }

  return state;
};
