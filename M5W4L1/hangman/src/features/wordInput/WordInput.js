import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRandomWord } from "../../api/randomWordAPI";

export const WordInput = () => {
  const [currentWord, setCurrentWord] = useState("");
  const dispatch = useDispatch();

  const setWord = () =>
    dispatch({ type: "SET_WORD", payload: { word: currentWord } });

  const getRandomWord = () => {
    fetchRandomWord().then((word) => {
      dispatch({ type: "SET_WORD", payload: { word } });
    });
  };

  return (
    <div>
      <h1>choose a new word</h1>
      <input
        value={currentWord}
        onChange={(e) => setCurrentWord(e.target.value)}
      />
      <button onClick={setWord}>Go</button>
      OR
      <button onClick={getRandomWord}>Get random word</button>
    </div>
  );
};
