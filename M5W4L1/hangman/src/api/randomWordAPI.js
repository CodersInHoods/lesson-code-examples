const endpoint = "https://random-word-api.herokuapp.com/word";

export const fetchRandomWord = () => {
  return fetch(endpoint)
    .then((res) => res.json())
    .then((words) => words[0]);
};
