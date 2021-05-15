import React from "react";
import TextField from "@material-ui/core/TextField";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

export const validate = (values) => {
  const errors = {};
  const requiredFields = ["firstName", "lastName", "email"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword =
      "The password confirmation is not the same as the password.";
  }
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

export const renderPasswordField = ({
  input,
  label,
  meta: { touched, invalid, error },
  ...custom
}) => {
  return (
    <FormControl variant="filled">
      <InputLabel error={touched && invalid}>{label}</InputLabel>
      <FilledInput error={touched && invalid} {...input} {...custom} />
      <FormHelperText error={touched && invalid}>
        {touched && error}
      </FormHelperText>
    </FormControl>
  );
};
