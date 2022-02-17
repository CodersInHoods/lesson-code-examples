import { useDispatch, useSelector } from "react-redux";

const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

export const WordGuesser = () => {
  const guesses = useSelector((state) => state.guesses);
  const dispatch = useDispatch();

  const guessLetter = (letter) =>
    dispatch({ type: "NEW_GUESS", payload: { letter } });

  return (
    <div>
      {letters.map((letter) => {
        return (
          <button
            disabled={guesses.includes(letter)}
            onClick={() => guessLetter(letter)}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};
