import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import { makeStyles } from "@material-ui/core/styles";
import EditCategoryForm from "./form/index";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Error from "next/error";

const useStyles = makeStyles({
  root: {
    width: "95%",
    padding: "15px",
    margin: "20px",
    borderRadius: "10px",
    border: "1px solid #e0e0e3",
  },
});

export default function Category() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const { categoriesArray } = useSelector(({ categories }) => categories);

  const currentCategory = categoriesArray.find(
    (category) => category.id === router.query.id
  );

  useEffect(() => {
    if (currentCategory) {
      dispatch(setPageName(currentCategory.name));
    }
  }, [currentCategory]);
  return (
    <div className={classes.root}>
      {currentCategory ? (
        <EditCategoryForm currentCategory={currentCategory} />
      ) : (
        <Error statusCode={404} />
      )}
    </div>
  );
}