import React from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import HttpsIcon from "@material-ui/icons/Https";
import { makeStyles } from "@material-ui/core/styles";
import ProfileTextField from "../../shared/ProfileTextField";
import { textFieldList } from "./constants";

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
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "& .MuiTextField-root": {
      margin: "1em 1em 0 1em",
    },
  },
  formButton: {
    color: "#fff",
    margin: "16px",
    backgroundColor: "#4f3cc9",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#372b8c",
      boxShadow: "0px 3px 5px rgba(0,0,0,0.6)",
    },
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={1}>
        <Avatar className={classes.avatarStyle}>
          <HttpsIcon />
        </Avatar>
        <div className={classes.hintStyle}>Hint: demo / demo</div>
        <form className={classes.inputWrapper} noValidate autoComplete="off">
          {textFieldList.map((item) => (
            <ProfileTextField key={item.label} item={item} />
          ))}
          <Button
            className={classes.formButton}
            variant="contained"
            type="submit"
            disableRipple
          >
            sign in
          </Button>
        </form>
      </Paper>
    </div>
  );
}
