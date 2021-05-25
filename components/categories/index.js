import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import CardComponent from "./Card";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

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
  const { categoriesArray } = useSelector(({ categories }) => categories);

  useEffect(() => {
    dispatch(setPageName("Categories"));
  }, []);
  return (
    <div className={classes.root}>
      {categoriesArray.map((item) => (
        <CardComponent key={item.id} item={item} />
      ))}
    </div>
  );
}
