const Input = (placeholder, options = {}) => {
  return Mystique.createElement("input", {
    placeholder,
    ...options,
  });
};
