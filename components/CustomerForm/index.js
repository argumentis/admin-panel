import React from "react";
import PropTypes from "prop-types";
import { uid } from "uid";
// material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
// redux
import { Field, reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createCustomer,
  editCustomer,
  deleteCustomer,
} from "redux/modules/customers/actionCreators";
// compomets
import FormButton from "../formComponents/FormButton";
import { FormTextField } from "../formComponents/FormTextField";
import { FormPasswordField } from "../formComponents/FormPasswordField";
import { validate } from "./helper";
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
  deleteButton: {
    color: "#f44336",
    width: "95px",
    borderRadius: "10px",
  },
}));

const CustomerForm = (props) => {
  const router = useRouter();
  const customerId = uid();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { pristine, submitting, handleSubmit, initialValues } = props;
  const { values, syncErrors } = useSelector(
    ({ form: { customerForm } }) => customerForm
  );

  const handleDispatch = () => {
    router.push("/customers");
    if (initialValues) {
      return dispatch(editCustomer(initialValues.id, values));
    }
    return dispatch(createCustomer(customerId, values));
  };

  const handleDelete = () => {
    dispatch(deleteCustomer([initialValues.id]));
    router.push("/customers");
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(validate)}>
      <Typography variant="h6" gutterBottom>
        Identify
      </Typography>
      <div className={classes.horizontal}>
        <div>
          <Field
            className={classes.inputStyle}
            name="firstName"
            component={FormTextField}
            label="First Name *"
          />
        </div>
        <div>
          <Field
            className={classes.inputStyle}
            name="lastName"
            component={FormTextField}
            label="Last Name *"
          />
        </div>
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
        <div>
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
        <div>
          <Field
            className={classes.inputStyle}
            name="zipcode"
            component={FormTextField}
            label="Zipcode"
          />
        </div>
        <div>
          <Field
            className={classes.inputStyle}
            name="city"
            component={FormTextField}
            label="City"
          />
        </div>
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
      <div className={classes.horizontal}>
        <FormButton
          className={classes.button}
          type="submit"
          onClick={!syncErrors ? handleDispatch : null}
          disabled={pristine || submitting}
          name={"save"}
          icon={<SaveIcon />}
        />
        {initialValues && (
          <FormButton
            className={classes.deleteButton}
            onClick={handleDelete}
            name={"delete"}
            icon={<DeleteIcon />}
          />
        )}
      </div>
    </form>
  );
};

export default reduxForm({
  form: "customerForm",
  validate,
})(CustomerForm);

CustomerForm.propTypes = {
  values: PropTypes.object,
  syncErrors: PropTypes.array,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  initialValues: PropTypes.object,
};
