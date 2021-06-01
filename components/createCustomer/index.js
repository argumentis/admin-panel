import React, { useEffect } from "react";
// material UI
import { makeStyles } from "@material-ui/core/styles";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
// components
import CreateCustomerForm from "./form/index";
// next
import { useRouter } from "next/router";

const useStyles = makeStyles({
  root: {
    width: "95%",
    padding: "15px",
    margin: "20px",
    borderRadius: "10px",
    border: "1px solid #e0e0e3",
  },
});

export default function CreateCustomer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const { username } = useSelector(({ login: { profile } }) => profile);

  useEffect(() => {
    if (username === "") {
      router.push("/login");
    }
    dispatch(setPageName("Create Customer"));
  }, []);

  return (
    <div className={classes.root}>
      <CreateCustomerForm />
    </div>
  );
}
