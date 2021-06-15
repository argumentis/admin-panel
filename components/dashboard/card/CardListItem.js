import React from "react";
import PropTypes from "prop-types";
// material UI
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
// next
import Link from "next/link";
//components
import { ratingStar } from "../../ReviewForm/constants";

const useStyles = makeStyles({
  secondaryText: {
    overflow: "hidden",
    maxWidth: "9em",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
});

export default function CardListItem({ pathname, item }) {
  const classes = useStyles();
  const rating = ratingStar
    .filter((rating) => rating.id === item.rating)
    .map((stars) => stars.image);

  return (
    <Link
      href={pathname === "/customers" ? `${pathname}/${item.id}` : pathname}
    >
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        {pathname === "/customers" ? (
          <ListItemText primary={`${item.firstName} ${item.lastName}`} />
        ) : (
          <ListItemText
            className={classes.secondaryText}
            primary={rating}
            secondary={item.description}
          />
        )}
      </ListItem>
    </Link>
  );
}

CardListItem.propTypes = {
  pathname: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};
