const signup = (email, password, passwordConfirmation) => {
  return fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, passwordConfirmation }),
  });
};

const login = (email, password) => {
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

const authenticateToken = (token) => {
  return fetch("http://localhost:3000/authenticate", {
    method: "POST",
    headers: {
      Authentication: token,
    },
  });
};
