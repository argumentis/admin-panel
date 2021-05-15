import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import { makeStyles } from "@material-ui/core/styles";
import Search from "../../shared/Search";
import Button from "@material-ui/core/Button";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import CustomersTable from "./table";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
  },

  button: {
    color: "#4f3cc9",
    borderRadius: "10px",
    width: "85px",
    height: "30px",
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

  useEffect(() => {
    dispatch(setPageName("Customers"));
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.headerBlock}>
        <Search />
        <Link href={"/customers/create"}>
          <Button className={classes.button} startIcon={<AddOutlinedIcon />}>
            Create
          </Button>
        </Link>
      </div>
      <div className={classes.mainBlock}>
        <CustomersTable />
      </div>
    </div>
  );
}
