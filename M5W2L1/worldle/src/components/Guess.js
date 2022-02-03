import React, { useState } from "react";
import { GuessInput } from "./GuessInput";
import { GuessButton } from "./GuessButton";

export const Guess = (props) => {
  const [currentGuessValue, setCurrentGuessValue] = useState("");

  const submitGuess = () => {
    const guessWasValid = props.submitGuess(currentGuessValue);

    if (guessWasValid) {
      setCurrentGuessValue("");
    }
  };

  return (
    <div id="guess-inputs">
      <GuessInput
        value={currentGuessValue}
        onChange={(newValue) => setCurrentGuessValue(newValue.slice(0, 6))}
      />
      <GuessButton
        disabled={currentGuessValue.length !== 6}
        onClick={submitGuess}
      />
    </div>
  );
};
