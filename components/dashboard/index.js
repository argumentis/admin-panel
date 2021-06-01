import React, { useEffect } from "react";
import moment from "moment";

// material UI
import { makeStyles } from "@material-ui/core/styles";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CommentIcon from "@material-ui/icons/Comment";
// components
import MediaCard from "./cardComponent/index";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
// next
import { useRouter } from "next/router";

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
      {/* <MediaCard
        pathname={"/reviews"}
        buttonName={"see all reviews"}
        itemArray={"arr..."}
        name={"Pending Reviews"}
        icon={<CommentIcon fontSize="large" />}
      /> */}
      <MediaCard
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
