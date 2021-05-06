import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FilterIcon from "@material-ui/icons/Filter";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles({
  root: {
    minWidth: 245,
    height: "245px",
    boxShadow: "none",
    border: "1px solid #e0e0e3",
    borderRadius: "10px",
    margin: "8px",
  },

  media: {
    height: 140,
  },

  buttonBlock: {
    padding: "8px",
    display: "flex",
    justifyContent: "space-between",
  },

  buttonStyle: {
    color: "#4f3cc9",
    fontWeight: "500",
    borderRadius: "10px",
    padding: "4px 5 px",
  },
  typographyStyle: {
    paddingBottom: "8px",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image="../../animal.jpg" />
      <CardContent className={classes.typographyStyle}>
        <Typography align="center" variant="h5">
          Animals
        </Typography>
      </CardContent>
      <CardActions className={classes.buttonBlock}>
        <Button className={classes.buttonStyle} startIcon={<FilterIcon />}>
          Products
        </Button>
        <Button className={classes.buttonStyle} startIcon={<CreateIcon />}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
