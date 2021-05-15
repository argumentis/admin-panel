import React, { useEffect } from "react";
import MainLayout from "../../layout";
import { useDispatch } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import { makeStyles } from "@material-ui/core/styles";
import CreateCustomerForm from "./form/index";

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

  useEffect(() => {
    dispatch(setPageName("Create Customer"));
  }, []);
  return (
    <MainLayout>
      <div className={classes.root}>
        <CreateCustomerForm />
      </div>
    </MainLayout>
  );
}
