import React, { useEffect } from "react";
import { uid } from "uid";
// material UI
import { makeStyles } from "@material-ui/core/styles";
// redux
import { connect } from "react-redux";
import { setPageName } from "redux/modules/layout/actionCreators";
import { createProduct } from "redux/modules/products/actionCreators";
// components
import ProductForm from "../ProductForm";
// next
import { useRouter } from "next/router";

const useStyles = makeStyles({
  root: {
    width: "95%",
    margin: "20px",
    borderRadius: "10px",
    border: "1px solid #e0e0e3",
  },
});

const mapStateToProps = (store) => {
  const { username } = store.login.profile;
  return {
    username,
  };
};

const CreateProduct = ({ username, setPageName, createProduct }) => {
  const productId = uid();
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    // user login check
    if (username === "") {
      router.push("/login");
    }
    setPageName("Create Product");
  }, []);

  const saveResult = (values) => {
    createProduct(productId, values);
    router.push("/products");
  };

  return (
    <div className={classes.root}>
      <ProductForm onSubmit={saveResult} />
    </div>
  );
};

export default connect(mapStateToProps, { setPageName, createProduct })(
  CreateProduct
);
