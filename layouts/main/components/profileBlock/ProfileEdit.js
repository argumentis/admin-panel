import React from "react";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ProfileTextField from "../../../../shared/ProfileTextField";
import { textFieldList } from "../../../../components/login/constants";

export const useStyles = makeStyles((theme) => ({
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "& .MuiTextField-root": {
      margin: "1em 1em 0 1em",
    },
  },
  root: {
    display: "flex",
    justifyContent: "space-between",
    "& > *": {
      color: "#fff",
      margin: "16px",
      width: "90px",
      backgroundColor: "#4f3cc9",
      borderRadius: "10px",
      "&:hover": {
        backgroundColor: "#372b8c",
        boxShadow: "0px 3px 5px rgba(0,0,0,0.6)",
      },
    },
  },
}));

export default function ProfileEdit(props) {
  const classes = useStyles();
  const { anchorEl, setAnchorEl } = props;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <form className={classes.inputWrapper} noValidate autoComplete="off">
          {textFieldList.map((item) => (
            <ProfileTextField key={item.label} item={item} />
          ))}
        </form>
        <div className={classes.root}>
          <Button variant="contained">Edit</Button>
          <Button variant="contained">Logout</Button>
        </div>
      </Menu>
    </div>
  );
}
