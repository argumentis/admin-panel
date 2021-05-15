import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import { makeStyles } from "@material-ui/core/styles";
import CreateCustomerForm from "./form/index";
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

export default function Customer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const { customersArray } = useSelector(({ customers }) => customers);

  const currenCustomer = customersArray.find(
    (customer) => customer.id === router.query.id
  );

  console.log(currenCustomer);

  useEffect(() => {
    dispatch(setPageName("Create Customer"));
  }, []);
  return (
    <div className={classes.root}>
      {currenCustomer ? <CreateCustomerForm /> : <Error statusCode={404} />}
    </div>
  );
}
