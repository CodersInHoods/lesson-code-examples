const Header = (innerText, ...children) => {
  return Mystique.createElement(
    "h1",
    {
      innerText,
      className: "blue underline iugerhire",
    },
    ...children
  );
};
