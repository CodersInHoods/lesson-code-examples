import React from "react";

export const ResultLetter = ({ match, letter }) => {
  return (
    <div
      className={`letter ${
        match === 1 ? "yellow" : match === 2 ? "green" : ""
      }`}
    >
      {letter}
    </div>
  );
};
