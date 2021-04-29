import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function ProfileTextField(props) {
  const [value, setValue] = useState();
  const { item } = props;
  const { label, type, autoComplete } = item;

  const handleOnChangeValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      error={value === ""}
      onChange={handleOnChangeValue}
      helperText={value === "" ? "Required" : ""}
      label={label}
      type={type}
      autoComplete={autoComplete}
    />
  );
}
