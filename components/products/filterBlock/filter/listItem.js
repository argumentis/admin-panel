import React from "react";
import PropTypes from "prop-types";
// material UI
import { makeStyles } from "@material-ui/core/styles";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
// redux
import { selectCategory } from "../../../../store/modules/categoriesReducer";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
  ListItemSyle: {
    "& .MuiListItem-root": {
      height: "30px",
    },
  },
}));

export default function FilterListItem({ item }) {
  const { name, id } = item;
  const classes = useStyles();
  const { selectedCategory } = useSelector(({ categories }) => categories);
  const dispatch = useDispatch();

  const selectActiveCategory = () => {
    dispatch(selectCategory(id));
  };

  const handleCanselSelected = () => {
    dispatch(selectCategory("0"));
  };

  return (
    <div className={classes.ListItemSyle}>
      <ListItem
        button
        selected={selectedCategory === id}
        onClick={selectActiveCategory}
      >
        <ListItemText primary={name} />
        {selectedCategory === id ? (
          <ListItemSecondaryAction>
            <IconButton onClick={handleCanselSelected} size="small">
              <HighlightOffIcon />
            </IconButton>
          </ListItemSecondaryAction>
        ) : (
          <ListItemSecondaryAction />
        )}
      </ListItem>
    </div>
  );
}

FilterListItem.propTypes = {
  item: PropTypes.object.isRequired,
};
