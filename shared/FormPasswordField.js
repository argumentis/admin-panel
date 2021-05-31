import React from "react";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

export const FormPasswordField = ({
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
