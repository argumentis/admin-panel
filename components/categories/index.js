import React, { useEffect } from "react";
// material UI
import { makeStyles } from "@material-ui/core/styles";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from "redux/modules/layout/actionCreators";
// components
import MediaCard from "./Card";
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
        <MediaCard key={item.id} item={item} />
      ))}
    </div>
  );
}
