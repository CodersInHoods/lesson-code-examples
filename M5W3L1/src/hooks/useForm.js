import { useEffect, useState } from "react";

export const useForm = (initialFormData, validators, onSubmit) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    if (event.target.type === "checkbox") {
      setFormData({
        ...formData,
        [event.target.name]: event.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  useEffect(() => {
    Object.keys(formData).forEach((key) => {
      const result = validators[key](formData[key]);

      setErrors({
        ...errors,
        [key]: !result,
      });
    });
  }, [formData]);

  return [formData, errors, handleChange, handleSubmit];
};
