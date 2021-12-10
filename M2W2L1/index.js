const todoFormEl = document.querySelector(".todo-form");

const generateTodo = (inputValue) => {
  const todos = JSON.parse(localStorage.todos);
  const lastTodo = todos.pop();
  const lastId = lastTodo?.id || 0;

  return {
    id: lastId + 1,
    text: inputValue,
    isCompleted: false,
  };
};

const addNewTodoToLocalStorage = (todo) => {
  const todos = JSON.parse(localStorage.todos);
  todos.push(todo);
  localStorage.todos = JSON.stringify(todos);
};

todoFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.target.querySelector("input");

  const newTodo = generateTodo(input.value);
  addNewTodoToLocalStorage(newTodo);
  generateAndAppendTodoEl(newTodo);

  input.value = "";
});

const updateTodos = (newTodo) => {
  const todos = JSON.parse(localStorage.todos);
  const todoIndex = todos.findIndex((todo) => todo.id === newTodo.id);

  if (newTodo.text) {
    todos.splice(todoIndex, 1, newTodo);
  } else {
    todos.splice(todoIndex, 1);
  }

  localStorage.todos = JSON.stringify(todos);
};

const generateAndAppendTodoEl = (todo) => {
  const todosListEl = document.querySelector(".todo-list");
  const li = document.createElement("li");

  li.innerHTML = `<input type="checkbox" ${
    todo.isCompleted ? "checked" : ""
  }/> ${todo.text} <button>Delete</button>`;

  const checkboxEl = li.querySelector("input");
  const deleteBtn = li.querySelector("button");
  checkboxEl.addEventListener("click", () => {
    updateTodos({ ...todo, isCompleted: checkboxEl.checked });
    
    if (checkboxEl.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  });

  deleteBtn.addEventListener("click", () => {
    updateTodos({ id: todo.id });
    li.remove();
  });

  todosListEl.appendChild(li);
};

const renderTodos = (todos) => {
  for (const todo of todos) {
    generateAndAppendTodoEl(todo);
  }
};

const init = () => {
  const rawTodos = localStorage.todos;

  if (!rawTodos) return console.log("No Todos in localStorage.");

  const todos = JSON.parse(rawTodos);
  return renderTodos(todos);
};

init();
