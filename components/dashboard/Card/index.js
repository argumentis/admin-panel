import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
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

  headerBlock: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundImage: "url(cardBackground.png)",
    backgroundRepeat: "no-repeat",
    height: "90px",
    padding: "16px",
  },

  iconStyle: {
    color: "rgb(220, 36, 64)",
  },

  headerText: {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: "16px",
    fontFamily: "Roboto , sans-serif",
    fontWeight: "400",
  },
  contentText: {
    fontSize: "24px",
    fontFamily: "Roboto , sans-serif",
    fontWeight: "400",
  },
  headerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  cardButton: {
    color: "#4f3cc9",
    width: "100%",
    height: "40px",
  },
});

export default function CardComponent(props) {
  const classes = useStyles();
  const { pathname, buttonName, itemArray, name, icon } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Link href={pathname}>
          <div className={classes.headerBlock}>
            <div className={classes.iconStyle}>{icon}</div>
            <div className={classes.headerContent}>
              <div className={classes.headerText}>{name}</div>
              <div className={classes.contentText}>23</div>
            </div>
          </div>
        </Link>
        <Divider />
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={"Max Shevchenko"} />
          </ListItem>
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

CardComponent.propTypes = {
  pathname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  itemArray: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};
