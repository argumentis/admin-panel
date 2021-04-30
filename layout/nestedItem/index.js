import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  nestedListItem: {
    paddingLeft: theme.spacing(2),
    height: "36px",
    "& .MuiListItemText-secondary": {
      fontSize: "16px",
      fontWeight: "400",
      color: "rgba(0, 0, 0, 0.54)",
    },
  },

  nestedListItemOpendedDrawer: {
    paddingLeft: "32px",
    height: "36px",
    "& .MuiListItemText-secondary": {
      fontSize: "16px",
      fontWeight: "400",
      color: "rgba(0, 0, 0, 0.54)",
    },
  },

  nestedListItemSelected: {
    "& .MuiListItemText-secondary": {
      fontSize: "16px",
      fontWeight: "400",
      color: "rgba(0, 0, 0)",
    },
  },

  listItemIconStyle: {
    minWidth: "40px",
  },
}));

export default function NestedItemList(props) {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const { layout } = useSelector((state) => state);
  const { openedPage } = layout;
  const { nestedItem, drawerStatus } = props;
  const { name, icon, pathname } = nestedItem;

  const handleClick = () => {
    if (openedPage !== name) {
      dispatch(setPageName(name));
    }
  };

  return (
    <Link href={pathname}>
      <ListItem
        className={clsx({
          [classes.nestedListItemOpendedDrawer]: drawerStatus,
          [classes.nestedListItem]: !drawerStatus,
          [classes.nestedListItemSelected]: pathname === router.pathname,
        })}
        button
        onClick={handleClick}
        selected={pathname === router.pathname}
      >
        <ListItemIcon className={classes.listItemIconStyle}>
          {icon}
        </ListItemIcon>
        <ListItemText className={classes.listItemText} secondary={name} />
      </ListItem>
    </Link>
  );
}
