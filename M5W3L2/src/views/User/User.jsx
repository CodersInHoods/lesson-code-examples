import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks";

export const User = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const query = useQuery();
  const [user, setUser] = useState({});

  useEffect(() => {
    const init = async () => {
      const user = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      ).then((resp) => resp.json());
      setUser(user);
    };

    init();
  }, []);

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={goBackHandler}>Go back</button>
      {user.name ? (
        <>
          <h3>User id: {id}</h3>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </>
      ) : (
        <h2>User with id: {id} not found</h2>
      )}
    </div>
  );
};
