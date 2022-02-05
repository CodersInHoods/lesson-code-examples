import { useState } from "react";
import uniqid from "uniqid";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import styles from "./App.module.scss";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (newTodoText) => {
    const newTodo = {
      id: uniqid(),
      value: newTodoText,
      isCompleted: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const completeHandler = (id) => {
    const localTodos = [...todos];
    const selectedTodoIndex = todos.findIndex((todo) => todo.id === id);
    localTodos[selectedTodoIndex].isCompleted =
      !localTodos[selectedTodoIndex].isCompleted;

    setTodos(localTodos);
  };

  const deleteHandler = (id) => {
    const localTodos = [...todos];
    const selectedTodoIndex = todos.findIndex((todo) => todo.id === id);
    localTodos.splice(selectedTodoIndex, 1);

    setTodos(localTodos);
  };

  const moveHandler = (currentIndex, shift) => {
    const localTodos = [...todos];
    const selectedTodo = localTodos.splice(currentIndex, 1)[0];
    localTodos.splice(currentIndex + shift, 0, selectedTodo);

    setTodos(localTodos);
  };

  return (
    <div className={styles.App}>
      <div className={styles.todo_app}>
        <TodoForm onFormSubmit={addNewTodo} />
        <TodoList
          todos={todos}
          onComplete={completeHandler}
          onDelete={deleteHandler}
          onMove={moveHandler}
        />
      </div>
    </div>
  );
};

export default App;
