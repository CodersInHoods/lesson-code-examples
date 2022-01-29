import React from "react";
import { useEffect, useState } from "react";

export const Example1 = () => {
  const [user, setUser] = useState({
    firstName: "Alex",
    lastName: "Smith",
  });

  const [counter, setCounter] = useState(0);

  const changeFirstName = (event) => {
    const firstName = event.target.value;
    setUser({ ...user, firstName: firstName });
  };

  const changeLastName = (event) => {
    const lastName = event.target.value;
    setUser({ ...user, lastName: lastName });
  };

  const incrementHandler = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("INITIAL MOUNT");
  }, []);

  useEffect(() => {
    console.log("new counter value:", counter);
    if (counter === 10) {
      setUser({ firstName: "", lastName: "" });
    }
  }, [counter]);

  useEffect(() => {
    console.log("new user value:", user);

    // EXAMPLE:
    // const userDetails = fetch(
    //   `/user-details?firstName=${user.firstName}&lastName=${user.lastName}`
    // ).then((resp) => resp.json());

    // setUserDetails(userDetails)
  }, [user]);

  console.log("RERENDER");

  return (
    <div className="App">
      <input
        onChange={changeFirstName}
        type={"text"}
        placeholder={"First name"}
        value={user.firstName}
      />
      <input
        onChange={changeLastName}
        type={"text"}
        placeholder={"Last name"}
        value={user.lastName}
      />
      {user.firstName && user.lastName && (
        <h1>
          First name: {user.firstName}, Last name: {user.lastName}
        </h1>
      )}

      <h2>Counter: {counter}</h2>
      <button onClick={incrementHandler}>Increment</button>
    </div>
  );
};
