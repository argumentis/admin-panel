import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Field, reduxForm } from "redux-form";
import { validate } from "./helper";
import { FormPasswordField } from "../../../shared/FormPasswordField";
import { FormTextField } from "../../../shared/FormTextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useDispatch, useSelector, connect } from "react-redux";
import { editProfile } from "../../../store/modules/loginReducer";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  longBlock: {
    display: "flex",
    flexDirection: "column",
  },

  inputStyle: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "16px",
  },

  passwordInputWrapper: {
    marginBottom: "16px",
    "& > *": {
      width: "100%",
    },
  },

  button: {
    width: "100%",
    color: "#fff",
    backgroundColor: "#4f3cc9",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#372b8c",
      boxShadow: "0px 3px 5px rgba(0,0,0,0.6)",
    },
  },
}));

const initialState = {
  password: "",
  showPassword: false,
};

let LoginForm = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const { pristine, submitting, handleSubmit, nameButton } = props;
  const { showPassword } = state;
  const { values, syncErrors } = useSelector(
    ({ form: { loginForm } }) => loginForm
  );

  const handleDispatch = () => {
    if (!syncErrors) {
      dispatch(editProfile(values));
      if (nameButton === "sign in") router.push("/");
    }
  };

  const handleChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(validate)}>
      <div className={classes.longBlock}>
        <Field
          className={classes.inputStyle}
          name="username"
          component={FormTextField}
          label="Username"
        />
        <div className={classes.passwordInputWrapper}>
          <Field
            name="password"
            label="Password"
            autoComplete="password"
            component={FormPasswordField}
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
        <Button
          className={classes.button}
          type="submit"
          onClick={handleDispatch}
          disabled={pristine || submitting}
        >
          {nameButton}
        </Button>
      </div>
    </form>
  );
};

LoginForm = reduxForm({
  form: "loginForm",
  validate,
})(LoginForm);

LoginForm = connect((state, { profile }) => ({
  initialValues: profile,
}))(LoginForm);

export default LoginForm;

LoginForm.propTypes = {
  pristine: PropTypes.bool,
  values: PropTypes.object,
  submitting: PropTypes.bool,
  syncErrors: PropTypes.array,
  handleSubmit: PropTypes.func,
  nameButton: PropTypes.string.isRequired,
  profile: PropTypes.object,
};
