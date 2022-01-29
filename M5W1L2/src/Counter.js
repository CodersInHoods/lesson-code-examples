import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => setCounter(counter + 1);

  const decrementHandler = () => setCounter(counter - 1);

  const resetHandler = () => setCounter(0);

  console.log("RENDER");

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
};
