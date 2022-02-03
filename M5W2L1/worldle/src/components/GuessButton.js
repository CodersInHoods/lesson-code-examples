import React from "react";

export const GuessButton = (props) => {
  return (
    <button disabled={props.disabled} onClick={props.onClick}>
      Guess!
    </button>
  );
};
