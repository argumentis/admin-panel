import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Field, reduxForm } from "redux-form";
import { renderTextField, validate, renderPasswordField } from "./helper";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "../../../store/modules/customerReducer";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { useRouter } from "next/router";
import { uid } from "uid";

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

const initialState = {
  password: "",
  confirmPassword: "",
  showPassword: false,
  showConfirmPassword: false,
};

const CreateCustomerForm = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const { pristine, submitting, handleSubmit } = props;
  const { showPassword, showConfirmPassword } = state;
  const customerId = uid();
  const { values, syncErrors } = useSelector(
    ({ form: { customerForm } }) => customerForm
  );

  const handleDispatch = () => {
    if (!syncErrors) {
      dispatch(createCustomer(customerId, values));
      router.push("/customers");
    }
  };

  const handleChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleClickShowConfirmPassword = () => {
    setState({ ...state, showConfirmPassword: !state.showConfirmPassword });
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
            component={renderTextField}
            label="First Name"
          />
        </div>
        <div>
          <Field
            className={classes.inputStyle}
            name="lastName"
            component={renderTextField}
            label="Last Name"
          />
        </div>
      </div>
      <div className={classes.longBlock}>
        <Field
          className={classes.inputStyle}
          name="email"
          component={renderTextField}
          label="Email"
        />
      </div>
      <div className={classes.horizontal}>
        <div>
          <Field
            className={classes.inputStyle}
            component={renderTextField}
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
          component={renderTextField}
          label="Address"
        />
      </div>
      <div className={classes.horizontal}>
        <div>
          <Field
            className={classes.inputStyle}
            name="zipcode"
            component={renderTextField}
            label="Zipcode"
          />
        </div>
        <div>
          <Field
            className={classes.inputStyle}
            name="city"
            component={renderTextField}
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
            component={renderPasswordField}
            type={showPassword ? "text" : "password"}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <div className={classes.passwordInputWrapper}>
          <Field
            className={classes.passwordInputStyle}
            name="confirmPassword"
            label="Confirm password"
            autoComplete="confirmPassword"
            component={renderPasswordField}
            type={showConfirmPassword ? "text" : "password"}
            onChange={handleChange("confirmPassword")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
      </div>
      <div>
        <Button
          className={classes.button}
          type="submit"
          onClick={handleDispatch}
          disabled={pristine || submitting}
          startIcon={<SaveIcon />}
        >
          save
        </Button>
      </div>
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
