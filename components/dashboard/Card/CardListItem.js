import React from "react";
import PropTypes from "prop-types";
// material UI
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import ListItemText from "@material-ui/core/ListItemText";
// next
import Link from "next/link";

export default function CardListItem({ pathname, item }) {
  return (
    <Link href={`${pathname}/${item.id}`}>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`${item.firstName} ${item.lastName}`} />
      </ListItem>
    </Link>
  );
}

CardListItem.propTypes = {
  pathname: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};
