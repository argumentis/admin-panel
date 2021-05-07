import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import MainLayout from "../../layout";
import { makeStyles } from "@material-ui/core/styles";
import Search from "../../shared/Search";
import Button from "@material-ui/core/Button";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import CustomersTable from "./table";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
  },

  button: {
    color: "#4f3cc9",
    borderRadius: "10px",
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
    <MainLayout>
      <div className={classes.root}>
        <div className={classes.headerBlock}>
          <Search />
          <Button className={classes.button} startIcon={<AddOutlinedIcon />}>
            Create
          </Button>
        </div>
        <div className={classes.mainBlock}>
          <CustomersTable />
        </div>
      </div>
    </MainLayout>
  );
}
