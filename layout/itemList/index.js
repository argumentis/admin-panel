import React, { useMemo, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";
import NestedItemList from "../nestedItem";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
import clsx from "clsx";
import Link from "next/link";

export const useStyles = makeStyles(() => ({
  root: {
    "& .Mui-selected": {
      borderLeft: "3px solid #4f3cc9",
      backgroundColor: "#fff",
    },
  },

  listItemIconStyle: {
    minWidth: "40px",
  },

  listItemStyle: {
    height: "36px",
    "& .MuiListItemText-secondary": {
      fontSize: "16px",
      fontWeight: "400",
      color: "rgba(0, 0, 0, 0.54)",
    },
  },

  listItemStyleSelected: {
    height: "36px",
    "& .MuiListItemText-secondary": {
      fontSize: "16px",
      fontWeight: "400",
      color: "rgba(0, 0, 0)",
    },
  },
}));

export default function ItemList(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { layout } = useSelector((state) => state);
  const [expanded, setExpanded] = useState(true);
  const { item, drawerStatus } = props;
  const { nestedListItems, icon, name, pathname } = item;
  const { openedPage } = layout;
  const router = useRouter();

  const handleClickExpand = () => setExpanded(!expanded);

  const handleClick = () => {
    if (openedPage !== name) {
      dispatch(setPageName(name));
    }
  };

  const listItemsComponents = useMemo(
    () =>
      nestedListItems.map((nestedItem) => (
        <NestedItemList
          key={nestedItem.name}
          nestedItem={nestedItem}
          drawerStatus={drawerStatus}
        />
      )),
    [drawerStatus]
  );

  return (
    <div className={classes.root}>
      {nestedListItems.length !== 0 ? (
        <ListItem
          button
          className={classes.listItemStyle}
          onClick={handleClickExpand}
        >
          <ListItemIcon className={classes.listItemIconStyle}>
            {expanded ? <ExpandMore /> : icon}
          </ListItemIcon>
          <ListItemText secondary={name} />
        </ListItem>
      ) : (
        <Link href={pathname}>
          <ListItem
            button
            onClick={handleClick}
            className={clsx({
              [classes.listItemStyle]: pathname !== router.pathname,
              [classes.listItemStyleSelected]: pathname === router.pathname,
            })}
            selected={pathname === router.pathname}
          >
            <ListItemIcon className={classes.listItemIconStyle}>
              {icon}
            </ListItemIcon>
            <ListItemText secondary={name} />
          </ListItem>
        </Link>
      )}
      <Collapse in={expanded} unmountOnExit>
        <List component="div" disablePadding>
          {listItemsComponents}
        </List>
      </Collapse>
    </div>
  );
}
