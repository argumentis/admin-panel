import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import { makeStyles } from "@material-ui/core/styles";
import CreateProductForm from "./form/index";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  root: {
    width: "95%",
    margin: "20px",
    borderRadius: "10px",
    border: "1px solid #e0e0e3",
  },
});

export default function CreateProduct() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const { username } = useSelector(({ login: { profile } }) => profile);

  useEffect(() => {
    if (username === "") {
      router.push("/login");
    }
    dispatch(setPageName("Create Product"));
  }, []);
  return (
    <div className={classes.root}>
      <CreateProductForm />
    </div>
  );
}
