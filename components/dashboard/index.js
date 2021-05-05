import React, { useEffect } from "react";
import MainLayout from "../../layout";
import CardComponent from "./Card";
import { makeStyles } from "@material-ui/core/styles";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CommentIcon from "@material-ui/icons/Comment";
import { useDispatch } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

export default function Dashboard() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageName("Dashboard"));
  }, []);

  const handleClick = () => {
    dispatch(setPageName(namePage));
  };
  return (
    <MainLayout>
      <div className={classes.root}>
        <CardComponent
          pathname={"/reviews"}
          buttonName={"see all reviews"}
          itemArray={"arr..."}
          name={"Pending Reviews"}
          icon={<CommentIcon fontSize="large" />}
        />
        <CardComponent
          pathname={"/customers"}
          buttonName={"see all customers"}
          itemArray={"arr..."}
          name={"New Customers"}
          icon={<PersonAddIcon fontSize="large" />}
        />
      </div>
    </MainLayout>
  );
}
