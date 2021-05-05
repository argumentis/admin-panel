import React, { useEffect } from "react";
import MainLayout from "../../layout";
import { useDispatch } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import CardComponent from "./Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    display: "flex",
    flexFlow: "row wrap",
  },
});

export default function Categories() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageName("Categories"));
  }, []);
  return (
    <MainLayout>
      <div className={classes.root}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </MainLayout>
  );
}
