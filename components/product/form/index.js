import React, { useState } from "react";
import PropTypes from "prop-types";
// material UI
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import InputAdornment from "@material-ui/core/InputAdornment";
import { MenuItem } from "@material-ui/core";
// redux
import { Field, reduxForm } from "redux-form";
import { useDispatch, useSelector, connect } from "react-redux";
import {
  editProduct,
  deleteProduct,
} from "../../../store/modules/productsReducer";
// components
import FormButton from "../../../shared/FormButton";
import TabPanel from "./TabPanel";
import { FormTextField } from "../../../shared/FormTextField";
import { validate, a11yProps } from "./helper";
// next
import { useRouter } from "next/router";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid #e0e0e3",
  },
  button: {
    color: "#fff",
    backgroundColor: "#4f3cc9",
    borderRadius: "10px",
    margin: "16px",
    width: "95px",
    "&:hover": {
      backgroundColor: "#372b8c",
      boxShadow: "0px 3px 5px rgba(0,0,0,0.6)",
    },
  },
  tabPanel: {
    padding: "8px 16px 16px 16px",
  },
  detailsTabPanel: {
    padding: "8px 16px 16px 16px",
    width: "300px",
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
  horizontal: {
    display: "flex",
    justifyContent: "space-between",
  },
  shortInput: {
    width: "120px",
  },
  deleteButton: {
    color: "#f44336",
    width: "95px",
    height: "36px",
    margin: "16px",
    padding: "0px",
    borderRadius: "10px",
  },
  image: {
    borderRadius: "10px",
    padding: "16px",
  },
}));

let EditProductForm = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [state, setState] = useState({ selectTab: 0, category: "" });
  const { pristine, submitting, handleSubmit, currentProduct } = props;
  const { categoriesArray } = useSelector(({ categories }) => categories);
  const { values, syncErrors } = useSelector(
    ({ form: { productForm } }) => productForm
  );

  const handleChangeTab = (event, newValue) => {
    setState({ ...state, selectTab: newValue });
  };

  const handleChangeCategory = (event) => {
    setState({ ...state, category: event.target.value });
  };

  const handleDispatch = () => {
    if (!syncErrors) {
      dispatch(editProduct(currentProduct.id, values));
      router.push("/products");
    }
  };

  const handleDelete = () => {
    dispatch(deleteProduct(currentProduct.id));
    router.push("/products");
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(validate)}>
      <div>
        <AppBar
          className={classes.appBar}
          position="static"
          color="transparent"
        >
          <Tabs
            value={state.selectTab}
            indicatorColor="primary"
            onChange={handleChangeTab}
          >
            <Tab label="image" {...a11yProps(0)} />
            <Tab label="details" {...a11yProps(1)} />
            <Tab label="description" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel
          value={state.selectTab}
          index={0}
          className={classes.tabPanel}
        >
          <img
            className={classes.image}
            src={currentProduct.image}
            width={300}
            height={250}
          />
          <Field
            className={classes.inputStyle}
            name="image"
            component={FormTextField}
            label="Image *"
          />
          <Field
            className={classes.inputStyle}
            name="thumbnail"
            component={FormTextField}
            label="Thumbnail *"
          />
        </TabPanel>
        <TabPanel
          value={state.selectTab}
          index={1}
          className={classes.detailsTabPanel}
        >
          <Field
            className={classes.inputStyle}
            name="reference"
            component={FormTextField}
            label="Reference *"
          />
          <div className={classes.shortInput}>
            <Field
              className={classes.inputStyle}
              name="price"
              component={FormTextField}
              label="Price *"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">€</InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.horizontal}>
            <div className={classes.shortInput}>
              <Field
                className={classes.inputStyle}
                name="width"
                component={FormTextField}
                label="Width *"
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">cm</InputAdornment>
                  ),
                }}
              />
            </div>
            <div className={classes.shortInput}>
              <Field
                className={classes.inputStyle}
                name="height"
                component={FormTextField}
                label="Height *"
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">cm</InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <Field
            className={classes.inputStyle}
            name="category"
            select
            value={state.category}
            onChange={handleChangeCategory}
            component={FormTextField}
            label="Category"
          >
            {categoriesArray.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Field>
          <div className={classes.shortInput}>
            <Field
              className={classes.inputStyle}
              name="stock"
              type="number"
              component={FormTextField}
              label="Stock *"
            />
          </div>
        </TabPanel>
        <TabPanel
          value={state.selectTab}
          index={2}
          className={classes.tabPanel}
        >
          <Field
            className={classes.multilineInputStyle}
            name="description"
            multiline
            component={FormTextField}
          />
        </TabPanel>
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

EditProductForm = reduxForm({
  form: "productForm",
  validate,
})(EditProductForm);

EditProductForm = connect((state, { currentProduct }) => ({
  initialValues: currentProduct,
}))(EditProductForm);

export default EditProductForm;

EditProductForm.propTypes = {
  values: PropTypes.object,
  syncErrors: PropTypes.array,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
};
