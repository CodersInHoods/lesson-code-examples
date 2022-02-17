const initialState = [];

export const guessesReducer = (state = initialState, action) => {
  if (action.type === "NEW_GUESS" && !state.includes(action.payload.letter)) {
    return [...state, action.payload.letter];
  }

  return state;
};
