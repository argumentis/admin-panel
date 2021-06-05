import React from "react";
import PropTypes from "prop-types";
// material UI
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import IconButton from "@material-ui/core/IconButton";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
// redux
import { useDispatch } from "react-redux";
import { deleteReview, changeStatusReview, } from "../../../../store/modules/reviewReducer";

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    display: "none",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  highlight: {
    display: "flex",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    color: "#4f3cc9",
    backgroundColor: "rgb(233, 231, 248)",
  },
  title: {
    flex: "1 1 100%",
  },
  buttonStyle: {
    color: "#4f3cc9",
    marginRight: "15px",
    borderRadius: "10px",
  },
  buttonDeleteStyle: {
    borderRadius: "10px",
    color: "#f44336",
  },
  buttonBlock: {
    display: "flex",
  },
}));

export default function TableToolbar(props) {
  const dispatch = useDispatch();
  const classes = useToolbarStyles();
  const { numSelected, state, setState } = props;
  const { selected } = state;

  const handleAcceptReview = () => {
    dispatch(changeStatusReview(selected, "accept"));
    setState({ ...state, selected: [] });
  };

  const handleRejectReview = () => {
    dispatch(changeStatusReview(selected, "reject"));
    setState({ ...state, selected: [] });
  };

  const handleDelete = () => {
    dispatch(deleteReview(selected));
    setState({ ...state, selected: [] });
  };

  const hanldeClearCheked = () => {
    setState({ ...state, selected: [] });
  };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <IconButton onClick={hanldeClearCheked} size="small">
        <CloseOutlinedIcon />
      </IconButton>
      <Typography
        className={classes.title}
        color="inherit"
        variant="subtitle1"
        component="div"
      >
        {numSelected} items selected
      </Typography>
      <div className={classes.buttonBlock}>
        <Tooltip title="Accept">
          <Button
            className={classes.buttonStyle}
            onClick={handleAcceptReview}
            startIcon={<ThumbUpIcon />}
          >
            Accept
          </Button>
        </Tooltip>
        <Tooltip title="Reject">
          <Button
            className={classes.buttonStyle}
            onClick={handleRejectReview}
            startIcon={<ThumbDownIcon />}
          >
            Reject
          </Button>
        </Tooltip>
        <Tooltip title="Delete">
          <Button
            onClick={handleDelete}
            className={classes.buttonDeleteStyle}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Tooltip>
      </div>
    </Toolbar>
  );
}

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func,
};
