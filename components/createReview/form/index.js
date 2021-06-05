import React, { useState } from "react";
import PropTypes from "prop-types";
import { uid } from "uid";
// material UI
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import { MenuItem } from "@material-ui/core";
// redux
import { Field, reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../../store/modules/reviewReducer";
// components
import { validate } from "./helper";
import { FormTextField } from "../../../shared/FormTextField";
import FormButton from "../../../shared/FormButton";
import { ratingStar } from "./constants";
// next
import { useRouter } from "next/router";

const useStyles = makeStyles(() => ({
  root: {
    width: "550px",
    display: "flex",
    flexDirection: "column",
  },
  inputStyle: {
    height: "80px",
    display: "flex",
    flexDirection: "column",
    "& .MuiFilledInput-root": {
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
  },
  multilineInputStyle: {
    display: "flex",
    flexDirection: "column",
    "& .MuiFilledInput-root": {
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
  },
  button: {
    color: "#fff",
    backgroundColor: "#4f3cc9",
    margin: "16px",
    borderRadius: "10px",
    width: "95px",
    "&:hover": {
      backgroundColor: "#372b8c",
      boxShadow: "0px 3px 5px rgba(0,0,0,0.6)",
    },
  },
}));

const CreateReviewForm = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const reviewId = uid();
  const dispatch = useDispatch();
  const { pristine, submitting, handleSubmit } = props;
  const { values, syncErrors } = useSelector(
    ({ form: { reviewForm } }) => reviewForm
  );
  const { productsArray } = useSelector(({ products }) => products);
  const { customersArray } = useSelector(({ customers }) => customers);
  const [state, setState] = useState({ customer: "", product: "", rating: "" });

  const handleChangeProduct = (event) => {
    setState({ ...state, product: event.target.value });
  };

  const handleChangeCustomer = (event) => {
    setState({ ...state, customer: event.target.value });
  };

  const handleChangeRating = (event) => {
    setState({ ...state, rating: event.target.value });
  };

  const handleDispatch = () => {
    if (!syncErrors) {
      dispatch(createReview(reviewId, values));
      router.push("/reviews");
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(validate)}>
      <Field
        className={classes.inputStyle}
        name="product"
        select
        value={state.product}
        onChange={handleChangeProduct}
        component={FormTextField}
        label="Product *"
      >
        {productsArray.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.reference}
          </MenuItem>
        ))}
      </Field>
      <Field
        className={classes.inputStyle}
        name="customer"
        select
        value={state.customer}
        onChange={handleChangeCustomer}
        component={FormTextField}
        label="Customer *"
      >
        {customersArray.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.firstName} {item.lastName}
          </MenuItem>
        ))}
      </Field>
      <Field
        className={classes.inputStyle}
        name="rating"
        select
        value={state.handleChangeRating}
        onChange={handleChangeRating}
        component={FormTextField}
        label="Rating *"
      >
        {ratingStar.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.image}
          </MenuItem>
        ))}
      </Field>
      <Field
        className={classes.multilineInputStyle}
        name="description"
        label="Description *"
        multiline
        component={FormTextField}
      />
      <FormButton
        className={classes.button}
        type="submit"
        onClick={handleDispatch}
        disabled={pristine || submitting}
        name={"save"}
        icon={<SaveIcon />}
      />
    </form>
  );
};

export default reduxForm({
  form: "reviewForm",
  validate,
})(CreateReviewForm);

CreateReviewForm.propTypes = {
  values: PropTypes.object,
  syncErrors: PropTypes.array,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
