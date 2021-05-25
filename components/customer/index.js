import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import { makeStyles } from "@material-ui/core/styles";
import EditCustomerForm from "./form/index";
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

  const currentCustomer = customersArray.find(
    (customer) => customer.id === router.query.id
  );

  useEffect(() => {
    if (currentCustomer) {
      dispatch(
        setPageName(`${currentCustomer.firstName} ${currentCustomer.lastName}`)
      );
    }
  }, [currentCustomer]);
  return (
    <div className={classes.root}>
      {currentCustomer ? (
        <EditCustomerForm currentCustomer={currentCustomer} />
      ) : (
        <Error statusCode={404} />
      )}
    </div>
  );
}
