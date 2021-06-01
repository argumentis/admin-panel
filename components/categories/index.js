import React, { useEffect } from "react";
// material UI
import { makeStyles } from "@material-ui/core/styles";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
// components
import CardComponent from "./card";
// next
import { useRouter } from "next/router";

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
  const { username } = useSelector(({ login: { profile } }) => profile);
  const { categoriesArray } = useSelector(({ categories }) => categories);
  const router = useRouter();

  useEffect(() => {
    if (username === "") {
      router.push("/login");
    }
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
