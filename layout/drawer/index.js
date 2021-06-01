import React, { useMemo } from "react";
// material UI
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
// constants
import { listItems } from "../constants";
// components
import ItemList from "./itemList";
// redux
import { useSelector } from "react-redux";

export const useStyles = makeStyles((theme) => ({
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
  listStyle: {
    paddingTop: "6px",
  },
}));

export default function DrawerComponent() {
  const classes = useStyles();
  const { drawerStatus } = useSelector(({ layout }) => layout);

  const listItemsComponents = useMemo(
    () =>
      listItems.map((item) => (
        <ItemList key={item.name} item={item} drawerStatus={drawerStatus} />
      )),
    [drawerStatus]
  );

  return (
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
  );
}
