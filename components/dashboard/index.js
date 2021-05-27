import React, { useEffect } from "react";
import CardComponent from "./Card";
import { makeStyles } from "@material-ui/core/styles";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CommentIcon from "@material-ui/icons/Comment";
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import { useRouter } from "next/router";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

export default function Dashboard() {
  const router = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { customersArray } = useSelector(({ customers }) => customers);
  const { username } = useSelector(({ login: { profile } }) => profile);

  useEffect(() => {
    if (username === "") {
      router.push("/login");
    }
    dispatch(setPageName("Dashboard"));
  }, []);

  return (
    <div className={classes.root}>
      {/* <CardComponent
        pathname={"/reviews"}
        buttonName={"see all reviews"}
        itemArray={"arr..."}
        name={"Pending Reviews"}
        icon={<CommentIcon fontSize="large" />}
      /> */}
      <CardComponent
        pathname={"/customers"}
        buttonName={"see all customers"}
        itemArray={customersArray.filter(
          (item) => item.createDate === moment().format("L")
        )}
        name={"New Customers"}
        icon={<PersonAddIcon fontSize="large" />}
      />
    </div>
  );
}
