import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Search from "../../../shared/Search";
import CategoriesFilter from "./filter";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    "& > *": {
      border: "1px solid #e0e0e3",
      borderRadius: "10px",
      width: "240px",
      padding: "16px",
    },
  },
}));

export default function FilterBlock({ value, setValue }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <Search value={value} setValue={setValue} />
        <CategoriesFilter />
      </Paper>
    </div>
  );
}
