const header = Header(
  "wordle",
  Header("is"),
  Header("a"),
  Header("cool"),
  Header("game")
);

const input = Input("your guess here", {
  onChange: (event) => {
    Mystique.setState({
      currentGuess: event.target.value,
    });
  },
});

const currentGuess = Guess("current guess here", {
  valueFromState: "currentGuess",
});

const footer = Header("copyright not me");

const root = document.querySelector("#root");

root.append(header, input, currentGuess, footer);
