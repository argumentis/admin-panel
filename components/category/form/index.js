import React from "react";
import PropTypes from "prop-types";
// next
import { useRouter } from "next/router";
// material UI
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
// redux
import { useDispatch, useSelector, connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  editCategory,
  deleteCategory,
} from "../../../store/modules/categoriesReducer";
// components
import FormButton from "../../../shared/FormButton";
import ProductTable from "./table";
import { FormTextField } from "../../../shared/FormTextField";
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

let EditCategoryForm = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { pristine, submitting, handleSubmit, currentCategory } = props;
  const { values, syncErrors } = useSelector(
    ({ form: { categoryForm } }) => categoryForm
  );

  const handleDispatch = () => {
    if (!syncErrors) {
      dispatch(editCategory(currentCategory.id, values));
      router.push("/categories");
    }
  };

  const handleDelete = () => {
    dispatch(deleteCategory(currentCategory.id));
    router.push("/categories");
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(validate)}>
      <div>
        <Field
          className={classes.inputStyle}
          name="name"
          component={FormTextField}
          label="Name"
        />
      </div>
      <ProductTable currentCategory={currentCategory} />

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
