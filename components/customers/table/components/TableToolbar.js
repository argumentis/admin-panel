import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import IconButton from "@material-ui/core/IconButton";

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
    color: "#f44336",
  },
}));

export default function TableToolbar(props) {
  const classes = useToolbarStyles();
  const { numSelected, state, setState } = props;

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
      <Tooltip title="Delete">
        <Button className={classes.buttonStyle} startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </Tooltip>
    </Toolbar>
  );
}

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func,
};
