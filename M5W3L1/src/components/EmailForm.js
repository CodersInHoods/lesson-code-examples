import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const EmailForm = () => {
  const [formData, errors, handleChange, handleSubmit] = useForm(
    {
      email: "",
    },
    {
      email: (value) => value.includes("@"),
    },
    () => {
      // submit data somewhere
    }
  );

  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <label>
        email
        <input name="email" />
        {errors.email && <div style={{ color: "red" }}>there is an error</div>}
      </label>
      <button type="submit">sign up</button>
    </form>
  );
};
