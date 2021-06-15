import React, { useState } from "react";
// material UI
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export const FormPasswordField = ({
  input,
  label,
  meta: { touched, invalid, error },
  ...custom
}) => {
  const [state, setState] = useState(false);

  const handleShowPassword = () => {
    setState(!state);
  };

  return (
    <FormControl variant="filled">
      <InputLabel error={touched && invalid}>{label}</InputLabel>
      <FilledInput
        error={touched && invalid}
        {...input}
        {...custom}
        type={state ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword} edge="end">
              {state ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText error={touched && invalid}>
        {touched && error}
      </FormHelperText>
    </FormControl>
  );
};
