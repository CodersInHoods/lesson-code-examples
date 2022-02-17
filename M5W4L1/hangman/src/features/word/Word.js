import { useSelector } from "react-redux";

export const Word = () => {
  const results = useSelector((state) => {
    return state.word
      .toUpperCase()
      .split("")
      .map((letter) => {
        return state.guesses.includes(letter) ? letter : "_";
      })
      .join("");
  });

  const wordCompleted = !results.split("").some((letter) => letter === "_");

  return (
    <div>
      <h1>
        {wordCompleted ? (
          <a
            target={"_blank"}
            href={`https://www.thefreedictionary.com/${results}`}
          >
            {results}
          </a>
        ) : (
          results
        )}
      </h1>
    </div>
  );
};
