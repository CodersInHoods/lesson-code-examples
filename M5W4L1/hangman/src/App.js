import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Word } from "./features/word/Word";
import { useSelector } from "react-redux";
import { WordInput } from "./features/wordInput/WordInput";
import { WordGuesser } from "./features/wordGuesser/WordGuesser";
import { Lives } from "./features/lives/Lives";

function App() {
  const wordSelected = useSelector((state) => !!state.word);
  const gameOver = useSelector((state) => state.gameState === "GAME_OVER");

  return (
    <div className="App">
      {gameOver ? (
        <h1>you lose</h1>
      ) : (
        <header className="App-header">
          {wordSelected ? <Word wordCompleted={true} /> : <WordInput />}
          {wordSelected && <WordGuesser />}
          {wordSelected && <Lives />}
        </header>
      )}
    </div>
  );
}

export default App;
