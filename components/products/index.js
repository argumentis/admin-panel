import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import { makeStyles } from "@material-ui/core/styles";
import FilterBlock from "./filterBlock";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import MediaCard from "./Card";
import SimpleButton from "../../shared/SimpleButton";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
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
    marginRight: "25px",
  },
});

export default function Products() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const { username } = useSelector(({ login: { profile } }) => profile);

  useEffect(() => {
    if (username === "") {
      router.push("/login");
    }
    dispatch(setPageName("Products"));
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.buttonBlock}>
        <SimpleButton name={"Create"} icon={<AddOutlinedIcon />} link={"/"} />
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
  );
}
