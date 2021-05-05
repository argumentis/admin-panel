import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import MainLayout from "../../layout";
import { makeStyles } from "@material-ui/core/styles";
import FilterBlock from "./Filter";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    display: "flex",
  },
});

export default function Products() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageName("Products"));
  }, []);

  return (
    <MainLayout>
      <div className={classes.root}>
        <FilterBlock />
      </div>
    </MainLayout>
  );
}
