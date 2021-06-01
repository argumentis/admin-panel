import React from "react";
import PropTypes from "prop-types";
import { uid } from "uid";
// material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
// redux
import { Field, reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "../../../store/modules/customerReducer";
// components
import { validate } from "./helper";
import { FormPasswordField } from "../../../shared/FormPasswordField";
import { FormTextField } from "../../../shared/FormTextField";
import FormButton from "../../../shared/FormButton";
// next
import { useRouter } from "next/router";

const useStyles = makeStyles(() => ({
  root: {
    width: "550px",
    display: "flex",
    flexDirection: "column",
  },
  horizontal: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    "& > *": {
      width: "255px",
    },
  },
  longBlock: {
    marginTop: "10px",
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
  passwordInputStyle: {
    width: "255px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  passwordInputWrapper: {
    height: "97px",
  },
  button: {
    color: "#fff",
    backgroundColor: "#4f3cc9",
    borderRadius: "10px",
    width: "95px",
    "&:hover": {
      backgroundColor: "#372b8c",
      boxShadow: "0px 3px 5px rgba(0,0,0,0.6)",
    },
  },
}));

const CreateCustomerForm = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const customerId = uid();
  const dispatch = useDispatch();
  const { pristine, submitting, handleSubmit } = props;
  const { values, syncErrors } = useSelector(
    ({ form: { customerForm } }) => customerForm
  );

  const handleDispatch = () => {
    if (!syncErrors) {
      dispatch(createCustomer(customerId, values));
      router.push("/customers");
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(validate)}>
      <Typography variant="h6" gutterBottom>
        Identify
      </Typography>
      <div className={classes.horizontal}>
        <Field
          className={classes.inputStyle}
          name="firstName"
          component={FormTextField}
          label="First Name *"
        />
        <Field
          className={classes.inputStyle}
          name="lastName"
          component={FormTextField}
          label="Last Name *"
        />
      </div>
      <div className={classes.longBlock}>
        <Field
          className={classes.inputStyle}
          name="email"
          component={FormTextField}
          label="Email *"
        />
      </div>
      <div className={classes.horizontal}>
        <Field
          className={classes.inputStyle}
          component={FormTextField}
          name="birthday"
          type="date"
          label="Birthday"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <Typography variant="h6" gutterBottom>
        Address
      </Typography>
      <div className={classes.longBlock}>
        <Field
          className={classes.inputStyle}
          name="address"
          component={FormTextField}
          label="Address"
        />
      </div>
      <div className={classes.horizontal}>
        <Field
          className={classes.inputStyle}
          name="zipcode"
          component={FormTextField}
          label="Zipcode"
        />
        <Field
          className={classes.inputStyle}
          name="city"
          component={FormTextField}
          label="City"
        />
      </div>
      <Typography variant="h6" gutterBottom>
        Password
      </Typography>
      <div className={classes.horizontal}>
        <div className={classes.passwordInputWrapper}>
          <Field
            className={classes.passwordInputStyle}
            name="password"
            label="Password"
            autoComplete="password"
            component={FormPasswordField}
          />
        </div>
        <div className={classes.passwordInputWrapper}>
          <Field
            className={classes.passwordInputStyle}
            name="confirmPassword"
            label="Confirm password"
            autoComplete="confirmPassword"
            component={FormPasswordField}
          />
        </div>
      </div>
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
  form: "customerForm",
  validate,
})(CreateCustomerForm);

CreateCustomerForm.propTypes = {
  values: PropTypes.object,
  syncErrors: PropTypes.array,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
