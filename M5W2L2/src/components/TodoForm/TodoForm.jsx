import React, { useState } from "react";
import styles from "./TodoForm.module.scss";

export const TodoForm = (props) => {
  const [inputText, setInputText] = useState("");

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    setInputText(value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (inputText) {
      props.onFormSubmit(inputText);
      setInputText("");
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <input
        value={inputText}
        type="text"
        placeholder="New Todo"
        onChange={inputChangeHandler}
      />
      <button type="submit">Create</button>
    </form>
  );
};
