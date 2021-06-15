import React from "react";
import PropTypes from "prop-types";
// material UI
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// component
import LoginForm from "components/LoginForm";
// redux
import { clearProfile } from "redux/modules/login/actionCreators";
import { useSelector, useDispatch } from "react-redux";
// next
import { useRouter } from "next/router";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0px 16px 0px 16px",
  },
  logoutButton: {
    color: "#fff",
    margin: "16px 0px 16px 0px",
    width: "100%",
    backgroundColor: "#4f3cc9",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#372b8c",
      boxShadow: "0px 3px 5px rgba(0,0,0,0.6)",
    },
  },
}));

export default function ProfileEdit({ state, setState }) {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const { profile } = useSelector(({ login }) => login);
  const { menuStatus } = state;

  const handleClose = () => {
    setState({ ...state, menuStatus: null });
  };

  const handleLogout = () => {
    dispatch(clearProfile());
    router.push("/login");
  };

  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={menuStatus}
        keepMounted
        open={Boolean(menuStatus)}
        onClose={handleClose}
      >
        <div className={classes.root}>
          <LoginForm initialValues={profile} nameButton={"edit"} />
          <Button
            onClick={handleLogout}
            className={classes.logoutButton}
            variant="contained"
          >
            Logout
          </Button>
        </div>
      </Menu>
    </div>
  );
}

ProfileEdit.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};