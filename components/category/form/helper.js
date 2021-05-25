import React from "react";
import TextField from "@material-ui/core/TextField";

export const validate = (values) => {
  const errors = {};
  const requiredFields = ["name"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};

export const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => {
  return (
    <TextField
      variant="filled"
      label={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
};
