import { useState } from "react";
import Counter from "./Counter";
import { User } from "./User";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [numberToGet, setNumberToGet] = useState(1);

  const getUsers = () => {
    fetch(`https://randomuser.me/api/?results=${numberToGet}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers([...users, ...data.results]);
      });
  };

  const onUserClick = (userId) => {
    console.log("a user has been clicked", userId);

    setUsers(users.filter((user) => user.login.uuid !== userId));
  };

  return (
    <div>
      <h1>my users</h1>
      {users.map((user) => {
        return <User key={user.login.uuid} user={user} onClick={onUserClick} />;
      })}
      <Counter onChange={setNumberToGet} />
      <button onClick={getUsers}>add {numberToGet} users</button>
    </div>
  );
};
