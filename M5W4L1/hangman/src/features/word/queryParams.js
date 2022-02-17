export const setQueryParam = (word) => {
  const encoded = btoa(word);

  const params = new URLSearchParams();

  params.set("word", encoded);
  window.location.search = params.toString();
};

export const getQueryParam = () => {
  const params = new URLSearchParams(window.location.search);
  const encodedWord = params.get("word");
  if (encodedWord) {
    return atob(encodedWord);
  }

  return null;
};
