import React from "react";
import { Result } from "./Result";

export const Results = (props) => {
  return (
    <div id="results">
      {props.results.map((result) => {
        return <Result key={result.guess} {...result} />;
      })}
    </div>
  );
};
