const form = document.querySelector("form");

const createTodoListEl = () => {
  let ul = document.body.querySelector("ul");
  if (!ul) {
    ul = document.createElement("ul");
    document.body.appendChild(ul);
  }

  return ul;
};

const addNewTodo = (inputValue) => {
  const ul = createTodoListEl();
  
  const li = document.createElement("li");
  li.innerHTML = `${inputValue} <button>Delete</button>`;
  const button = li.querySelector('button');

  button.addEventListener('click', () => {
    li.remove()
  })

  ul.appendChild(li);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = event.target.querySelector("input");
  const inputValue = input.value;

  addNewTodo(inputValue);

  input.value = "";
});
