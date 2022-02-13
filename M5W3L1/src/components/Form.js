import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const Form = () => {
  const [formData, errors, handleChange, handleSubmit] = useForm(
    {
      name: "",
      age: "",
      job: "",
      agree: false,
    },
    {
      name: (value) => value.length > 3,
      age: (value) => Number(value) != NaN,
      job: (value) => value.length > 5,
      agree: (value) => !value,
    },
    () => {
      // submit data somewhere
    }
  );

  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <label>
        name
        <input name="name" />
        {errors.name && <div style={{ color: "red" }}>there is an error</div>}
      </label>
      <label>
        age
        <input name="age" />
        {errors.age && <div style={{ color: "red" }}>there is an error</div>}
      </label>
      <label>
        job
        <input name="job" />
        {errors.job && <div style={{ color: "red" }}>there is an error</div>}
      </label>
      <label>
        agrre?
        <input name="agree" type="checkbox" value="agree" />
        {errors.agree && <div style={{ color: "red" }}>there is an error</div>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
