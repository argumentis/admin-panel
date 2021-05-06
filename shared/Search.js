import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(() => ({
  searchStyle: {
    "& .MuiFilledInput-root": {
      backgroundColor: "#f4f6f4",
      height: "48px",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    "& .Mui-focused": {
      backgroundColor: "#e8ede8",
    },
  },
  iconStyle: {
    color: "rgba(0, 0, 0, 0.26)",
  },
}));

export default function Search() {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const handleOnChangeValue = (event) => {
    setValue(event.target.value);
  };

  const handleClearValue = () => {
    setValue("");
  };

  return (
    <TextField
      className={classes.searchStyle}
      label="Search"
      variant="filled"
      value={value}
      onChange={handleOnChangeValue}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            {value === "" ? (
              <SearchIcon className={classes.iconStyle} />
            ) : (
              <IconButton size="small" onClick={handleClearValue}>
                <ClearIcon className={classes.iconStyle} />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
}
