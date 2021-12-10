const factsListEl = document.querySelector(".facts_list");
const errorContainerEl = document.querySelector(".error");
const reFetchBtnEl = document.querySelector(".try_again_btn");

let counter = 0;

const fetchData = (url) => {
  return fetch(url).then((resp) => resp.json());
};

const createFactEl = (fact) => {
  const li = document.createElement("li");
  li.innerText = fact.text;

  return li;
};

const renderFacts = (facts) => {
  facts.forEach((fact) => {
    const factEl = createFactEl(fact);

    factsListEl.appendChild(factEl);
  });
};

const fetchCatFacts = async () => {
  const catsUrl =
    counter === 0
      ? "https://cat-fact.herokuapp.com/fcts/random?animal_type=cat&amount=5"
      : "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5";

  try {
    errorContainerEl.style.display = "none";
    const data = await fetchData(catsUrl);
    renderFacts(data);
  } catch (error) {
    errorContainerEl.style.display = "block";
    console.error(error);
  } finally {
    console.log("counter:", counter);
    counter += 1;
  }
};

reFetchBtnEl.addEventListener("click", fetchCatFacts);

fetchCatFacts();
