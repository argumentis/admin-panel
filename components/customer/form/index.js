import React from "react";
import PropTypes from "prop-types";
// material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
// redux
import { Field, reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { editCustomer, deleteCustomer,} from "../../../store/modules/customerReducer";
// compomets
import FormButton from "../../../shared/FormButton";
import { FormTextField } from "../../../shared/FormTextField";
import { FormPasswordField } from "../../../shared/FormPasswordField";
import { validate } from "./helper";
// next
import { useRouter } from "next/router";
import { connect } from "react-redux";

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

let EditCustomerForm = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { pristine, submitting, handleSubmit, currentCustomer } = props;
  const { values, syncErrors } = useSelector(
    ({ form: { customerForm } }) => customerForm
  );

  const handleDispatch = () => {
    if (!syncErrors) {
      dispatch(editCustomer(currentCustomer.id, values));
      router.push("/customers");
    }
  };

  const handleDelete = () => {
    dispatch(deleteCustomer([currentCustomer.id]));
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
          onClick={handleDispatch}
          disabled={pristine || submitting}
          name={"save"}
          icon={<SaveIcon />}
        />
        <FormButton
          className={classes.deleteButton}
          onClick={handleDelete}
          name={"delete"}
          icon={<DeleteIcon />}
        />
      </div>
    </form>
  );
};

EditCustomerForm = reduxForm({
  form: "customerForm",
  validate,
})(EditCustomerForm);

EditCustomerForm = connect((state, { currentCustomer }) => ({
  initialValues: currentCustomer,
}))(EditCustomerForm);

export default EditCustomerForm;

EditCustomerForm.propTypes = {
  values: PropTypes.object,
  syncErrors: PropTypes.array,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  currentCustomer: PropTypes.object.isRequired,
};
