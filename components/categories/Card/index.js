import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import SimpleButton from "../../../shared/SimpleButton";
import Typography from "@material-ui/core/Typography";
import FilterIcon from "@material-ui/icons/Filter";
import CreateIcon from "@material-ui/icons/Create";
import { selectCategory } from "../../../store/modules/categoriesReducer";
import { useDispatch } from "react-redux";

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

  typographyStyle: {
    paddingBottom: "8px",
  },
});

export default function MediaCard({ item }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { image, name, id } = item;

  const selectActiveCategory = () => {
    dispatch(selectCategory(id));
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} />
      <CardContent className={classes.typographyStyle}>
        <Typography align="center" variant="h5">
          {name}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttonBlock}>
        <SimpleButton
          onClick={selectActiveCategory}
          name={"Products"}
          icon={<FilterIcon />}
          link={"/products"}
        />
        <SimpleButton
          name={"Edit"}
          icon={<CreateIcon />}
          link={`/categories/${id}`}
        />
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
};
