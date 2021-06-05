import React, { useEffect, useState } from "react";
// material UI
import { makeStyles } from "@material-ui/core/styles";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
// components
import Search from "../../shared/Search";
import ReviewsTable from "./table";
import SimpleButton from "../../shared/SimpleButton";
import EditReview from "../editReview";
// next
import { useRouter } from "next/router";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
  },
  mainBlock: {
    margin: "0px 25px 0px 25px",
    height: "500px",
  },
  headerBlock: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "10px",
    margin: "0px 25px 0px 25px",
  },
});

export default function Customers() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const router = useRouter();
  const [value, setValue] = useState("");
  const [drawerStatus, setDrawerStatus] = useState(false);
  const { username } = useSelector(({ login: { profile } }) => profile);
  const { reviewsArray } = useSelector(({ reviews }) => reviews);
  const { customersArray } = useSelector(({ customers }) => customers);

  const searchResult = reviewsArray.filter((item) => {
    const customerName = customersArray
      .filter((customer) => customer.id === item.customer)
      .map((object) => object.firstName);

    if (!item.customer) return false;

    return customerName[0].toLowerCase().indexOf(value.toLowerCase()) > -1;
  });

  useEffect(() => {
    if (username === "") {
      router.push("/login");
    }
    dispatch(setPageName("Reviews"));
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.headerBlock}>
        <Search value={value} setValue={setValue} />
        <SimpleButton
          name={"Create"}
          icon={<AddOutlinedIcon />}
          link={"/reviews/create"}
        />
      </div>
      <div className={classes.mainBlock}>
        <EditReview
          drawerStatus={drawerStatus}
          setDrawerStatus={setDrawerStatus}
        />
        <ReviewsTable
          drawerStatus={drawerStatus}
          setDrawerStatus={setDrawerStatus}
          searchResult={searchResult}
        />
      </div>
    </div>
  );
}
