import React from "react";
import TextField from "@material-ui/core/TextField";

export const FormTextField = ({
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
