import { useState } from "react";
import "./App.css";
import { Guess } from "./components/Guess";
import { Results } from "./components/Results";
import { WinMessage } from "./components/WinMessage";
import { cities } from "./data/cities";

function App() {
  const [answer, setAnswer] = useState(
    cities[Math.floor(Math.random() * cities.length)]
  );
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [winner, setWinner] = useState(false);

  const submitGuess = (guess) => {
    if (guess.length !== 6) {
      setErrorMessage("Guess must be exactly 6 letters!");
      return false;
    }
    if (!cities.find((city) => city.toUpperCase() === guess.toUpperCase())) {
      setErrorMessage("Guess must be a capital city!");
      return false;
    }

    setErrorMessage("");

    const splitAnswer = answer.toUpperCase().split("");
    const splitGuess = guess.toUpperCase().split("");

    // 0 means no match
    // 1 means match in incorrect position
    // 2 means exact match
    const matches = [0, 0, 0, 0, 0, 0];

    splitGuess.forEach((letter, i) => {
      if (letter === splitAnswer[i]) {
        matches[i] = 2;
        return;
      }

      if (splitAnswer.includes(letter)) {
        matches[i] = 1;
      }
    });

    if (matches.every((match) => match === 2)) {
      setWinner(true);
    }

    setResults([...results, { guess: guess.toUpperCase(), matches }]);

    return true;
  };

  const reset = () => {
    setAnswer(cities[Math.floor(Math.random() * cities.length)]);
    setResults([]);
    setWinner(false);
  };

  return (
    <div>
      <header>worldle</header>
      <Guess submitGuess={submitGuess} />
      <p>{errorMessage}</p>
      <Results results={results} />
      {winner && <WinMessage onClick={reset} />}
    </div>
  );
}

export default App;
