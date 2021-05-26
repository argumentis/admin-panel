import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Field, reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import ProductTable from "../table/index";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { renderTextField, validate } from "./helper";
import {
  editCustomer,
  deleteCustomer,
} from "../../../store/modules/customerReducer";

const useStyles = makeStyles(() => ({
  root: {
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

  inputStyle: {
    width: "255px",
    height: "80px",
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

let EditCategoryForm = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { pristine, submitting, handleSubmit, currentCategory } = props;
  const { name, syncErrors } = useSelector(
    ({ form: { categoryForm } }) => categoryForm
  );

  const handleDispatch = () => {
    if (!syncErrors) {
      dispatch(editCustomer(currentCategory.id, name));
      router.push("/customers");
    }
  };

  const handleDelete = () => {
    dispatch(deleteCustomer([currentCategory.id]));
    router.push("/customers");
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(validate)}>
      <div>
        <Field
          className={classes.inputStyle}
          name="name"
          component={renderTextField}
          label="Name"
        />
      </div>
      <ProductTable />

      <div className={classes.horizontal}>
        <Button
          className={classes.button}
          type="submit"
          onClick={handleDispatch}
          disabled={pristine || submitting}
          startIcon={<SaveIcon />}
        >
          save
        </Button>
        <Button
          className={classes.deleteButton}
          onClick={handleDelete}
          startIcon={<DeleteIcon />}
        >
          delete
        </Button>
      </div>
    </form>
  );
};

EditCategoryForm = reduxForm({
  form: "categoryForm",
  validate,
})(EditCategoryForm);

EditCategoryForm = connect((state, { currentCategory }) => ({
  initialValues: currentCategory,
}))(EditCategoryForm);

export default EditCategoryForm;

EditCategoryForm.propTypes = {
  syncErrors: PropTypes.array,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  currentCategory: PropTypes.object.isRequired,
};
