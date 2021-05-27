import React from "react";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

export const validate = (values) => {
  const errors = {};
  const requiredFields = ["username", "password"];
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
      label={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
};

export const renderPasswordField = ({
  input,
  label,
  meta: { touched, invalid, error },
  ...custom
}) => {
  return (
    <FormControl>
      <InputLabel error={touched && invalid}>{label}</InputLabel>
      <Input error={touched && invalid} {...input} {...custom} />
      <FormHelperText error={touched && invalid}>
        {touched && error}
      </FormHelperText>
    </FormControl>
  );
};
