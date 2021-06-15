import React from "react";
import PropTypes from "prop-types";
// maretial UI
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
// components
import { ratingStar } from "../../../ReviewForm/constants";
// redux
import { useSelector, useDispatch } from "react-redux";
import { setActiveReview } from "redux/modules/reviews/actionCreators";

const useStyles = makeStyles((theme) => ({
  checkbox: {
    "& .Mui-checked": {
      color: "#4f3cc9",
    },
  },
  tableRowPending: {
    borderLeft: "10px solid rgb(255, 152, 0)",
  },
  tableRowAccept: {
    borderLeft: "10px solid rgb(76, 175, 80)",
  },
  tableRowReject: {
    borderLeft: "10px solid rgb(244, 67, 54)",
  },
  avatar: {
    width: "27px",
    height: "27px",
    color: "#bdbdbd",
  },
  customersBlock: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  customerName: {
    marginLeft: "10px",
  },
  commentStyle: {
    overflow: "hidden",
    maxWidth: "18em",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
}));

export default function TableRowItem({
  state,
  setState,
  row,
  isItemSelected,
  labelId,
  drawerStatus,
  setDrawerStatus,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { selected } = state;
  const { customersArray } = useSelector(({ customers }) => customers);
  const { productsArray } = useSelector(({ products }) => products);
  const { activeReview } = useSelector(({ reviews }) => reviews);

  const handleSetActiveReview = () => {
    if (drawerStatus === false) {
      setDrawerStatus(true);
    }
    dispatch(setActiveReview(row.id));
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setState({ ...state, selected: newSelected });
  };

  return (
    <TableRow
      className={clsx({
        [classes.tableRowPending]: row.status === "pending",
        [classes.tableRowReject]: row.status === "reject",
        [classes.tableRowAccept]: row.status === "accept",
      })}
      hover
      role="checkbox"
      tabIndex={-1}
      selected={row.id === activeReview}
    >
      <TableCell className={classes.checkbox} padding="checkbox">
        <Checkbox
          onClick={(event) => handleClick(event, row.id)}
          className={classes.checkbox}
          checked={isItemSelected}
          inputProps={{ "aria-labelledby": labelId }}
        />
      </TableCell>
      <TableCell align="left">{row.date}</TableCell>
      <TableCell
        onClick={handleSetActiveReview}
        component="th"
        id={labelId}
        scope="row"
        padding="none"
      >
        <div className={classes.customersBlock}>
          <AccountCircleIcon className={classes.avatar} />
          <Typography className={classes.customerName} variant="body2">
            {customersArray
              .filter((item) => item.id === row.customer)
              .map((customer) => `${customer.firstName} ${customer.lastName}`)}
          </Typography>
        </div>
      </TableCell>
      <TableCell align="left">
        {productsArray
          .filter((item) => item.id === row.product)
          .map((product) => product.reference)}
      </TableCell>
      <TableCell align="left">
        {ratingStar
          .filter((item) => item.id === row.rating)
          .map((product) => product.image)}
      </TableCell>
      <TableCell className={classes.commentStyle} align="left">
        {row.description}
      </TableCell>
      <TableCell align="left">{row.status}</TableCell>
    </TableRow>
  );
}

TableRowItem.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func,
  row: PropTypes.object.isRequired,
  isItemSelected: PropTypes.bool,
  labelId: PropTypes.string.isRequired,
  drawerStatus: PropTypes.bool.isRequired,
  setDrawerStatus: PropTypes.func,
};
