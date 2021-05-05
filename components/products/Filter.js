import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    "& > *": {
      border: "1px solid #e0e0e3",
      borderRadius: "10px",
      width: "210px",
      height: "700px",
      padding: "16px",
    },
  },
  searchStyle: { borderTopLeftRadius: "10px" },
}));

export default function FilterBlock() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <TextField
          className={classes.searchStyle}
          label="Search"
          variant="filled"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </div>
  );
}
