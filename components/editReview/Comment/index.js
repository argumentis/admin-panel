import React from "react";
import PropTypes from "prop-types";
// material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// redux
import { useDispatch } from "react-redux";
import { editReview } from "redux/modules/reviews/actionCreators";
// components

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

export default function Comment({ reviewItem, drawerStatus, setDrawerStatus }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(editReview(reviewItem[0].id, event.target.value));
  };

  return (
    <div className={classes.root}>
      <TextField
        id="filled-multiline-static"
        label="Comment"
        multiline
        fullWidth={true}
        rows={12}
        onChange={handleChange}
        value={reviewItem[0] ? reviewItem[0].description : "none"}
        variant="filled"
      />
    </div>
  );
}

Comment.propTypes = {
  reviewItem: PropTypes.array,
  drawerStatus: PropTypes.bool.isRequired,
  setDrawerStatus: PropTypes.func,
};
