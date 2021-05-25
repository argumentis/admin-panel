import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FilterIcon from "@material-ui/icons/Filter";
import CreateIcon from "@material-ui/icons/Create";
import Link from "next/link";

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

export default function MediaCard({ item }) {
  const classes = useStyles();
  const { image, name, id } = item;
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} />
      <CardContent className={classes.typographyStyle}>
        <Typography align="center" variant="h5">
          {name}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttonBlock}>
        <Button className={classes.buttonStyle} startIcon={<FilterIcon />}>
          Products
        </Button>
        <Link href={`/categories/${id}`}>
          <Button className={classes.buttonStyle} startIcon={<CreateIcon />}>
            Edit
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
};
