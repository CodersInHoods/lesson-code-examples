import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { wordReducer } from "../features/word/wordReducer";
import { guessesReducer } from "../features/wordGuesser/guessesReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    word: wordReducer,
    guesses: guessesReducer,
    gameState: (state = "SETTING_WORD", action) => {
      if (action.type === "GAME_OVER") {
        return action.type;
      }

      return state;
    },
  },
});
