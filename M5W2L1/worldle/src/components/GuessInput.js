import React from "react";

export const GuessInput = (props) => {
  return (
    <input
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
      placeholder="Guess"
    />
  );
};
