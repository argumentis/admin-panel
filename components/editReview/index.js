import React from "react";
import PropTypes from "prop-types";
// material UI
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// redux
import { useSelector, useDispatch } from "react-redux";
import { setActiveReview } from "redux/modules/reviews/actionCreators";
// components
import { ratingStar } from "../ReviewForm/constants";
import Comment from "./Comment";
//next
import Link from "next/link";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: "380px",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "380px",
  },
  content: {
    marginTop: "40px",
    padding: "16px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerTypography: {
    paddingTop: "8px",
  },
  customersBlock: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  nameCustomer: {
    color: "#4f3cc9",
    marginLeft: "10px",
    cursor: "pointer",
  },
  nameProduct: {
    marginTop: "8px",
    color: "#4f3cc9",
    cursor: "pointer",
  },
  avatar: {
    width: "27px",
    height: "27px",
    color: "#bdbdbd",
  },
  verticalAlign: {
    width: "200px",
    display: "flex",
    flexDirection: "column",
    paddingRight: "20px",
    "& > *": {
      marginTop: "10px",
      height: "70px",
    },
  },
  info: {
    marginTop: "20px",
    display: "flex",
  },
  text: {
    textDecoration: "none",
    display: "flex",
    cursor: "pointer",
  },
}));

export default function EditReview({ drawerStatus, setDrawerStatus }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { customersArray } = useSelector(({ customers }) => customers);
  const { productsArray } = useSelector(({ products }) => products);
  const { activeReview, reviewsArray } = useSelector(({ reviews }) => reviews);
  const reviewItem = reviewsArray.filter((item) => item.id === activeReview);

  const handleCloseDrawer = () => {
    setDrawerStatus(false);
    dispatch(setActiveReview("0"));
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={drawerStatus}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.content}>
          <div className={classes.header}>
            <Typography className={classes.headerTypography} variant="h6">
              Review detail
            </Typography>
            <IconButton onClick={handleCloseDrawer}>
              <ClearIcon />
            </IconButton>
          </div>
          <div className={classes.info}>
            <div className={classes.verticalAlign}>
              <div>
                <Typography variant="caption" display="block" gutterBottom>
                  Customer
                </Typography>
                <Link
                  href={`/customers/${reviewItem[0] && reviewItem[0].customer}`}
                >
                  <div className={classes.customersBlock}>
                    <AccountCircleIcon className={classes.avatar} />
                    <Typography
                      className={classes.nameCustomer}
                      variant="body2"
                    >
                      {customersArray
                        .filter((item) =>
                          reviewItem[0]
                            ? item.id === reviewItem[0].customer
                            : "undefined"
                        )
                        .map(
                          (customer) =>
                            `${customer.firstName} ${customer.lastName}`
                        )}
                    </Typography>
                  </div>
                </Link>
              </div>
              <Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Date
                </Typography>
                {reviewItem[0] ? reviewItem[0].date : "undefined"}
              </Typography>
            </div>
            <div className={classes.verticalAlign}>
              <Link
                href={`/products/${reviewItem[0] && reviewItem[0].product}`}
              >
                <div>
                  <Typography variant="caption" display="block" gutterBottom>
                    Product
                  </Typography>
                  <Typography className={classes.nameProduct} variant="body2">
                    {productsArray
                      .filter((item) =>
                        reviewItem[0]
                          ? item.id === reviewItem[0].product
                          : "undefined"
                      )
                      .map((product) => product.reference)}
                  </Typography>
                </div>
              </Link>
              <Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Rating
                </Typography>
                {ratingStar
                  .filter((item) =>
                    reviewItem[0]
                      ? item.id === reviewItem[0].rating
                      : "undefined"
                  )
                  .map((rating) => rating.image)}
              </Typography>
            </div>
          </div>
          <Comment
            reviewItem={reviewItem}
            drawerStatus={drawerStatus}
            setDrawerStatus={setDrawerStatus}
          />
        </div>
      </Drawer>
    </div>
  );
}

EditReview.propTypes = {
  drawerStatus: PropTypes.bool.isRequired,
  setDrawerStatus: PropTypes.func,
};
