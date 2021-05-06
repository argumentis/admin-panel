import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import MainLayout from "../../layout";
import { makeStyles } from "@material-ui/core/styles";
import FilterBlock from "./filterBlock";
import Button from "@material-ui/core/Button";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import MediaCard from "./Card";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
  },

  button: {
    marginRight: "25px",
    color: "#4f3cc9",
    borderRadius: "10px",
  },

  mainBlock: {
    display: "flex",
  },

  content: {
    width: "100%",
    height: "100%",
    margin: "0px 20px 0px 20px",
    display: "flex",
    flexFlow: "row wrap",
  },

  buttonBlock: {
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: "10px",
  },
});

export default function Products() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageName("Products"));
  }, []);

  return (
    <MainLayout>
      <div className={classes.root}>
        <div className={classes.buttonBlock}>
          <Button className={classes.button} startIcon={<AddOutlinedIcon />}>
            Create
          </Button>
        </div>
        <div className={classes.mainBlock}>
          <FilterBlock />
          <div className={classes.content}>
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
