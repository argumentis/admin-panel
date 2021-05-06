import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Search from "../../../shared/Search";
import CategoriesFilter from "./CategoriesFilter";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    "& > *": {
      border: "1px solid #e0e0e3",
      borderRadius: "10px",
      width: "240px",
      height: "500px",
      padding: "16px",
    },
  },
}));

export default function FilterBlock() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <Search />
        <CategoriesFilter />
      </Paper>
    </div>
  );
}
