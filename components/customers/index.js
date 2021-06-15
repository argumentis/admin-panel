import React, { useEffect, useState } from "react";
// material UI
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import { makeStyles } from "@material-ui/core/styles";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from "redux/modules/layout/actionCreators";
// components
import Search from "../Search";
import CustomersTable from "./Table";
import SimpleButton from "../Button";
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
  const { customersArray } = useSelector(({ customers }) => customers);
  const { username } = useSelector(({ login: { profile } }) => profile);

  useEffect(() => {
    if (username === "") {
      router.push("/login");
    }
    dispatch(setPageName("Customers"));
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.headerBlock}>
        <Search value={value} setValue={setValue} />
        <SimpleButton
          name={"Create"}
          icon={<AddOutlinedIcon />}
          link={"/customers/create"}
        />
      </div>
      <div className={classes.mainBlock}>
        <CustomersTable
          searchResult={customersArray.filter((item) => {
            if (!item.firstName) return false;
            return (
              item.firstName.toLowerCase().indexOf(value.toLowerCase()) > -1
            );
          })}
        />
      </div>
    </div>
  );
}
