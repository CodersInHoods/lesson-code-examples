import React from "react";
import { TodoListItem } from "./TodoListItem";
import styles from './TodoList.module.scss';

export const TodoList = ({
  todos,
  onComplete,
  onDelete,
  onMove
}) => {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo, index) => {
        return (
          <TodoListItem
            key={index}
            index={index}
            todo={todo}
            onComplete={onComplete}
            onDelete={onDelete}
            onMove={onMove}
            isLast={todos.length - 1 === index}
            isFirst={!index}
          />
        );
      })}
    </ul>
  );
};
