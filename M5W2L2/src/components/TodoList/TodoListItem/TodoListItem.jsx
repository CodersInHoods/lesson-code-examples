import React from "react";
import styles from "./TodoListItem.module.scss";

export const TodoListItem = ({
  todo,
  onComplete,
  onDelete,
  onMove,
  isLast,
  isFirst,
  index,
}) => {
  return (
    <li className={styles.listItem}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => onComplete(todo.id)}
      />
      <span>{todo.value}</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.delete} onClick={() => onDelete(todo.id)}>Delete</button>
        <button onClick={() => onMove(index, -1)} disabled={isFirst}>
          Up
        </button>
        <button onClick={() => onMove(index, 1)} disabled={isLast}>
          Down
        </button>
      </div>
    </li>
  );
};
