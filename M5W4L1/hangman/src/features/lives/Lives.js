import { useDispatch, useSelector } from "react-redux";

export const Lives = () => {
  const livesRemaining = useSelector((state) => {
    const correctGuesses = state.guesses.filter((letter) => {
      return state.word.includes(letter);
    }).length;
    const incorrectGuesses = state.guesses.length - correctGuesses;

    return 5 - incorrectGuesses;
  });
  const dispatch = useDispatch();

  if (livesRemaining <= 0) {
    dispatch({ type: "GAME_OVER" });
  }

  return (
    <div>
      <h3>{livesRemaining} lives remaining</h3>
    </div>
  );
};
