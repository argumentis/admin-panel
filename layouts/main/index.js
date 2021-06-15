import React from "react";
import PropTypes from "prop-types";
// material UI
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// components
import ProfileBlock from "./ProfileBlock";
import DrawerComponent from "./Drawer";
// redux
import { useDispatch, useSelector } from "react-redux";
import { changeDrawerStatus } from "redux/modules/layout/actionCreators";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    zIndex: "2",
    color: "#808080",
    width: "100%",
    height: "50px",
    backgroundColor: "white",
    borderTop: "1px solid #e0e0e3",
    borderBottom: "1px solid #e0e0e3",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  logoStyle: {
    width: "235px",
    height: "23px",
    marginTop: "10px",
    backgroundImage: "url(/logo.PNG)",
  },
  selectedPageName: {
    marginTop: "12px",
    marginLeft: "12px",
    width: "200px",
    fontSize: "20px",
    fontFamily: "Roboto , sans-serif",
    color: "#808080",
    fontWeight: "500",
  },
  drawerButtonBlock: {
    display: "flex",
    marginLeft: "25px",
  },
  drawerButton: {
    transform: "rotate(0deg)",
    transition: "transform 195ms",
  },
  drawerButtonClicked: {
    transform: "rotate(180deg)",
    transition: "transform 195ms",
  },
  content: {
    marginTop: "55px",
    zIndex: "1",
    flexGrow: 1,
  },
}));

export default function MainLayout({ children }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { layout } = useSelector((state) => state);
  const { drawerStatus, openedPage } = layout;

  const handleDrawerToggle = () => {
    dispatch(changeDrawerStatus());
  };

  return (
    <div className={classes.root}>
      <div position="fixed" className={classes.appBar}>
        <div className={classes.drawerButtonBlock}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
          >
            <MenuIcon
              className={clsx({
                [classes.drawerButtonClicked]: drawerStatus,
                [classes.drawerButton]: !drawerStatus,
              })}
            />
          </IconButton>
          <div className={classes.selectedPageName}>{openedPage}</div>
        </div>
        <div className={classes.logoStyle} />
        <ProfileBlock />
      </div>
      <DrawerComponent />
      <main className={classes.content}>{children}</main>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
};
