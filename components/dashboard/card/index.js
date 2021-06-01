import React from "react";
import PropTypes from "prop-types";
// material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
// components
import CardListItem from "./CardListItem";
import CardHeader from "./CardHeader";
// next
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boxShadow: "none",
    border: "1px solid #e0e0e3",
    marginLeft: "15px",
    borderRadius: "10px",
    "& > *": {
      padding: "0px",
    },
  },
  cardButton: {
    color: "#4f3cc9",
    width: "100%",
    height: "40px",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const { pathname, buttonName, itemArray, name, icon } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <CardHeader
          pathname={pathname}
          name={name}
          icon={icon}
          item={itemArray}
        />
        <Divider />
        <List component="nav" aria-label="main mailbox folders">
          {itemArray.map((item) => (
            <CardListItem key={item.id} pathname={pathname} item={item} />
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Link href={pathname}>
          <Button className={classes.cardButton} size="small">
            {buttonName}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  pathname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  itemArray: PropTypes.array.isRequired,
  icon: PropTypes.object.isRequired,
  buttonName: PropTypes.string.isRequired,
};
