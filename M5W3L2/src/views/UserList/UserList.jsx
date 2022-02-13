import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const init = async () => {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((resp) => resp.json());
      setUsers(data);
    };

    init();
  }, []);

  return (
    <div>
      {users.length ? (
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <h2>Users list is empty</h2>
      )}
    </div>
  );
};
