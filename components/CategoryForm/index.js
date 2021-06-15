import React from "react";
import PropTypes from "prop-types";
// next
import { useRouter } from "next/router";
// material UI
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
// redux
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  editCategory,
  deleteCategory,
} from "redux/modules/categories/actionCreators";

// components
import FormButton from "../formComponents/FormButton";
import ProductTable from "./Table";
import { FormTextField } from "../formComponents/FormTextField";
import { validate } from "./helper";

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

const CategoryForm = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { pristine, submitting, handleSubmit, initialValues } = props;
  const { values, syncErrors } = useSelector(
    ({ form: { categoryForm } }) => categoryForm
  );

  const handleDispatch = () => {
    if (!syncErrors) {
      dispatch(editCategory(initialValues.id, values));
      router.push("/categories");
    }
  };

  const handleDelete = () => {
    dispatch(deleteCategory(initialValues.id));
    router.push("/categories");
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <div>
        <Field
          className={classes.inputStyle}
          name="name"
          component={FormTextField}
          label="Name"
        />
      </div>
      <ProductTable currentCategory={initialValues} />
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

export default reduxForm({
  form: "categoryForm",
  validate,
})(CategoryForm);

CategoryForm.propTypes = {
  syncErrors: PropTypes.array,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  currentCategory: PropTypes.object.isRequired,
};
