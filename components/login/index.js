import React from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import HttpsIcon from "@material-ui/icons/Https";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import LoginForm from "./form";

export const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: "url(https://source.unsplash.com/random/1600x900)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    "& > *": {
      marginTop: "6em",
      minWidth: "300px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "1px solid #e0e0e3",
      borderRadius: "10px",
    },
  },

  avatarStyle: {
    backgroundColor: "#283593",
    margin: "16px",
  },

  hintStyle: {
    color: "#9e9e9e",
    marginTop: "0",
  },

  formStyle: {
    width: "100%",
    padding: "16px",
  },
}));

export default function Login() {
  const classes = useStyles();
  const { profile } = useSelector(({ login }) => login);

  return (
    <div className={classes.root}>
      <Paper elevation={1}>
        <Avatar className={classes.avatarStyle}>
          <HttpsIcon />
        </Avatar>
        <div className={classes.hintStyle}>Hint: demo / demo</div>
        <div className={classes.formStyle}>
          <LoginForm profile={profile} nameButton={"sign in"} />
        </div>
      </Paper>
    </div>
  );
}
