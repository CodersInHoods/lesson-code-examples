import { useEffect, useState } from "react";
import { useInterval } from "../hooks/useInterval";

function Counter({ id, onChange }) {
  const [value, setValue] = useState(0);

  const changeValue = (diff) => setValue(value + diff);
  const increment = (userId) => changeValue(1);
  const decrement = () => changeValue(-1);

  useEffect(() => {
    if (onChange) onChange(value);
  }, [value]);

  useEffect(() => {
    console.log("there is a new counter value", value);
  }, [value]);

  useEffect(() => {
    console.log("there is a new id value", id);
  }, [id]);

  useEffect(() => {
    console.log("there is a new value", { value, id });
  }, [value, id]);

  useEffect(() => {
    console.log("welcome!");
  }, []);

  //   useEffect(() => {
  //     const intervalId = setInterval(increment, 1000);
  //     console.log(intervalId);
  //     return () => {
  //       clearInterval(intervalId);
  //     };
  //   }, []);

  //   useInterval(() => increment(), 1000);

  return (
    <div>
      <button onClick={decrement}>-</button> {value}{" "}
      <button onClick={() => increment()}>+</button>
      {/* <button onClick={increment()}>+</button> */}
      {/* <button onClick={increment}>+</button> */}
    </div>
  );
}

export default Counter;
