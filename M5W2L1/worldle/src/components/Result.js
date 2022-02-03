import React from "react";
import { ResultLetter } from "./ResultLetter";

export const Result = (props) => {
  return (
    <div className="result">
      {props.guess.split("").map((letter, i) => {
        return (
          <ResultLetter
            key={`${letter}${i}`}
            match={props.matches[i]}
            letter={letter}
          />
        );
      })}
    </div>
  );
};
