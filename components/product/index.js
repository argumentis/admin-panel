import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import { makeStyles } from "@material-ui/core/styles";
import EditProductForm from "./form/index";
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

export default function Product() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const { username } = useSelector(({ login: { profile } }) => profile);
  const { productsArray } = useSelector(({ products }) => products);

  const currentProduct = productsArray.find(
    (product) => product.id === router.query.id
  );

  useEffect(() => {
    if (username === "") {
      router.push("/login");
    }
    if (currentProduct) {
      dispatch(setPageName(currentProduct.reference));
    }
  }, [currentProduct]);

  return (
    <div className={classes.root}>
      {currentProduct ? (
        <EditProductForm currentProduct={currentProduct} />
      ) : (
        <Error statusCode={404} />
      )}
    </div>
  );
}
