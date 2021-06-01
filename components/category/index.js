import React, { useEffect } from "react";
// material UI
import { makeStyles } from "@material-ui/core/styles";
// redux
import { useSelector, useDispatch } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
// next
import { useRouter } from "next/router";
import Error from "next/error";
// components
import EditCategoryForm from "./form/index";

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
  const { username } = useSelector(({ login: { profile } }) => profile);
  const { categoriesArray } = useSelector(({ categories }) => categories);

  const currentCategory = categoriesArray.find(
    (category) => category.id === router.query.id
  );

  useEffect(() => {
    if (username === "") {
      router.push("/login");
    }
    if (currentCategory) {
      dispatch(setPageName(`Category "${currentCategory.name}"`));
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
