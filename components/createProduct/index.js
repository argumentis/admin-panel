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

const CreateProduct = ({ username }) => {
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    // user login check
    if (username === "") {
      router.push("/login");
    }
    setPageName("Create Product");
  }, []);

  return (
    <div className={classes.root}>
      <ProductForm />
    </div>
  );
};

export default connect(mapStateToProps, { setPageName })(CreateProduct);
