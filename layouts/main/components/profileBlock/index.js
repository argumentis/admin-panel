import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import HttpsIcon from "@material-ui/icons/Https";
import { makeStyles } from "@material-ui/core/styles";
import RefreshIcon from "@material-ui/icons/Refresh";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProfileEdit from "./ProfileEdit";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    marginRight: "25px",
  },

  avatarStyle: {
    backgroundColor: "#283593",
    margin: "0px",
    height: "32px",
    width: "32px",
  },

  reloadButton: {
    "& > *": {
      color: "#808080",
    },
  },
  circularProgressStyle: {
    margin: "15px",
  },

  profileButtonStyle: {
    marginTop: "2px",
    color: "#808080",
    textTransform: "none",
    borderRadius: "10px",
    height: "44px",
  },
}));
export default function ProfileBlock() {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOnClick = () => {
    setActive(true);
    setTimeout(() => setActive(false), 1000);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <div className={classes.reloadButton} onClick={handleOnClick}>
        {active ? (
          <CircularProgress
            className={classes.circularProgressStyle}
            size={18}
            color="inherit"
          />
        ) : (
          <IconButton>
            <RefreshIcon />
          </IconButton>
        )}
      </div>
      <Button
        onClick={handleClick}
        className={classes.profileButtonStyle}
        startIcon={
          <Avatar className={classes.avatarStyle}>
            <HttpsIcon />
          </Avatar>
        }
      >
        Jane Doe
      </Button>
      <ProfileEdit anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </div>
  );
}
