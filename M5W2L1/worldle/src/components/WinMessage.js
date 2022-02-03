import React from "react";

export const WinMessage = (props) => {
  return (
    <div id="win-message">
      YOU WIN
      <button onClick={props.onClick}>play again</button>
    </div>
  );
};
