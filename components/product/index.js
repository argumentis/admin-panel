import React, { useEffect } from "react";
// material UI
import { makeStyles } from "@material-ui/core/styles";
// redux
import { connect } from "react-redux";
import { setPageName } from "redux/modules/layout/actionCreators";
// components
import ProductForm from "../ProductForm";
// next
import { useRouter } from "next/router";
import Error from "next/error";

const useStyles = makeStyles({
  root: {
    width: "95%",
    padding: "15px",
    margin: "20px",
    borderRadius: "10px",
    border: "1px solid #e0e0e3",
  },
});

const mapStateToProps = (store) => {
  const { productsArray } = store.products;
  const { username } = store.login.profile;
  return {
    productsArray,
    username,
  };
};

const Product = ({ productsArray, username, setPageName }) => {
  const classes = useStyles();
  const router = useRouter();

  // find current product from router id
  const currentProduct = productsArray.find(
    (product) => product.id === router.query.id
  );

  useEffect(() => {
    // user login check
    if (username === "") {
      router.push("/login");
    }
    // set page name
    if (currentProduct) {
      setPageName(`#${currentProduct.reference}`);
    }
  }, [currentProduct]);

  return (
    <div className={classes.root}>
      {currentProduct ? (
        <ProductForm initialValues={currentProduct} />
      ) : (
        <Error statusCode={404} />
      )}
    </div>
  );
};

export default connect(mapStateToProps, { setPageName })(Product);
