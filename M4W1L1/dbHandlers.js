const fs = require("fs");
const path = require("path");
const { argv } = require("yargs");

const DB_PATH = path.resolve("./db.json");

const readTasks = () => {
  if (!fs.existsSync("./db.json")) {
    fs.writeFileSync(DB_PATH, JSON.stringify([]));
  }
  const data = fs.readFileSync("./db.json");

  return JSON.parse(data);
};

const renderList = () => {
  const todos = readTasks();
  if (!todos.length) {
    console.log("NO todos in the list");
    return;
  }

  todos.forEach(({ text, isCompleted }, index) => {
    const complitionText = isCompleted ? "completed" : "pending";

    console.log(`${index + 1}. ${text} (${complitionText})`);
  });
};

const addTask = (text) => {
  const newTodo = {
    text,
    isCompleted: false,
  };

  const data = readTasks();
  data.push(newTodo);

  fs.writeFileSync(DB_PATH, JSON.stringify(data));
};

const completeTask = (index) => {
  const data = readTasks();
  data[index].isCompleted = true;

  fs.writeFileSync(DB_PATH, JSON.stringify(data));
};

module.exports = {
  readTasks,
  addTask,
  completeTask,
};
