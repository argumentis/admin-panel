import React, { useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { listItems } from "./constants";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ItemList from "./components/itemList";
import MenuIcon from "@material-ui/icons/Menu";
import ProfileBlock from "./components/profileBlock";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  appBar: {
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    color: "#808080",
    width: "100%",
    height: "50px",
    backgroundColor: "white",
    borderTop: "1px solid #e0e0e3",
    borderBottom: "1px solid #e0e0e3",
  },

  drawer: {
    width: "240px",
    flexShrink: 0,
    whiteSpace: "nowrap",
  },

  drawerOpen: {
    marginTop: "50px",
    borderRight: "0px",
    width: "240px",
    overflow: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerClose: {
    borderRight: "0px",
    marginTop: "50px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1,
    },
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
    backgroundImage: "url(logo.PNG)",
  },

  selectedPageName: {
    marginTop: "12px",
    marginLeft: "12px",
    fontSize: "20px",
    fontFamily: "Roboto , sans-serif",
    color: "#808080",
    fontWeight: "500",
  },

  listStyle: {
    paddingTop: "6px",
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
    flexGrow: 1,
  },
}));

export default function MainLayout({ children }) {
  const classes = useStyles();
  const [drawerStatus, setDrawerStatus] = useState(false);

  const listItemsComponents = useMemo(
    () =>
      listItems.map((item) => (
        <ItemList key={item.name} item={item} drawerStatus={drawerStatus} />
      )),
    [drawerStatus]
  );

  const handleDrawerToggle = () => {
    setDrawerStatus(!drawerStatus);
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
          <div className={classes.selectedPageName}>Orders</div>
        </div>
        <div className={classes.logoStyle}></div>
        <ProfileBlock />
      </div>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawerStatus,
          [classes.drawerClose]: !drawerStatus,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: drawerStatus,
            [classes.drawerClose]: !drawerStatus,
          }),
        }}
      >
        <List className={classes.listStyle}>{listItemsComponents}</List>
      </Drawer>
      <main className={classes.content}>{children}</main>
    </div>
  );
}
