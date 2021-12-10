const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const todos = [
  {
    id: 1,
    text: "Create a server",
    isCompleted: true,
  },
  {
    id: 2,
    text: "todo #2",
    isCompleted: false,
  },
  {
    id: 3,
    text: "todo #3",
    isCompleted: false,
  },
  {
    id: 4,
    text: "todo #4",
    isCompleted: true,
  },
];

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("TODO app");
});

app.get("/todos", (req, res) => {
  if (req.query.isCompleted) {
    const isCompleted = req.query.isCompleted === "true";

    const filteredTodos = todos.filter(
      (todo) => todo.isCompleted === isCompleted
    );

    return res.status(200).send(filteredTodos);
  } else {
    return res.status(200).send(todos);
  }
});

app.get("/home", (req, res) => {
  const filePath = path.resolve("./public/index.html");

  res.status(200).sendFile(filePath);
});

app.get("/todos/:id", (req, res) => {
  const { id: rawId } = req.params;
  const id = parseInt(rawId);

  const todo = todos.find((todo) => todo.id === id);

  if (todo) {
    res.status(200).send(todo);
  } else {
    res.status(404).send(`Todo with id: ${id} not exists.`);
  }
});

app.post("/todos", (req, res) => {
  const lastTodoId = todos[todos.length - 1].id;

  const newTodo = {
    id: lastTodoId + 1,
    text: req.body.text,
    isCompleted: false,
  };

  todos.push(newTodo);
  res.status(201).send(newTodo);
});

app.patch("/todos/:id", (req, res) => {
  const oldTodoIndex = todos.findIndex(
    (todo) => todo.id === parseInt(req.params.id)
  );

  if (oldTodoIndex === -1) {
    return res.status(404).send(`Todo with id: ${req.params.id} not exists.`);
  }

  const updatedTodo = {
    ...todos[oldTodoIndex],
    ...req.body,
  };

  todos.splice(oldTodoIndex, 1, updatedTodo);

  res.status(200).send(updatedTodo);
});

app.delete("/todos/:id", (req, res) => {
  const { id: rawId } = req.params;
  const id = parseInt(rawId);

  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return res.status(404).send(`Todo with id: ${id} not exists.`);
  }

  todos.splice(todoIndex, 1);

  res.status(200).send(`Item with id: ${id} has been removed`);
});

app.listen(3000, () => {
  console.log("Server is running on port: ", 3000);
});
