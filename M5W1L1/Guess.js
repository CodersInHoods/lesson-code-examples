const Guess = (innerText, options = {}) => {
  return Mystique.createElement("p", {
    innerText,
    ...options,
  });
};
