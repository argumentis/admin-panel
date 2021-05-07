import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import TableHeader from "./components/TableHeader";
import TableToolbar from "./components/TableToolbar";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import { getComparator, stableSort } from "./helpers";

function createData(
  id,
  customer,
  lastCustomer,
  lastSeen,
  orders,
  totalSpend,
  latestPurchase,
  news
) {
  return {
    id,
    customer,
    lastCustomer,
    lastSeen,
    orders,
    totalSpend,
    latestPurchase,
    news,
  };
}

const rows = [
  createData(1, "Cupcake", "sdf", 305, 3.7, 67, 4.3, false),
  createData(2, "Donut", "sdg", 452, 25.0, 51, 4.9, true),
  createData(3, "Eclair", "sdfg", 262, 16.0, 24, 6.0, true),
  createData(4, "Cupcake1", "rggr", 305, 3.7, 67, 4.3, false),
  createData(5, "Donut1", "wrwh", 452, 25.0, 51, 4.9, true),
  createData(6, "Eclair1", "Cujtjp", 262, 16.0, 24, 6.0, true),
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },

  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
    borderRadius: "10px",
    border: "1px solid #e0e0e3",
  },

  table: {
    minWidth: 750,
  },

  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },

  checkbox: {
    "& .Mui-checked": {
      color: "#4f3cc9",
    },
  },

  tableRow: {
    "& > *": {
      backgroundColor: "#fff",
    },
  },

  avatar: {
    width: "27px",
    height: "27px",
    color: "#bdbdbd",
  },

  customersBlock: {
    display: "flex",
    alignItems: "center",
  },

  customerName: {
    marginLeft: "10px",
    color: "#4f3cc9",
  },
}));

const initialState = {
  order: "asc",
  orderBy: "customer",
  selected: [],
  page: 0,
  rowsPerPage: 5,
};

export default function CustomersTable() {
  const classes = useStyles();
  const [state, setState] = useState(initialState);
  const { order, orderBy, selected, page, rowsPerPage } = state;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setState({ ...state, order: isAsc ? "desc" : "asc", orderBy: property });
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      console.log(event.target.checked, "event");
      const newSelecteds = rows.map((n) => n.id);
      setState({ ...state, selected: newSelecteds });
      return;
    }
    setState({ ...state, selected: [] });
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

  const handleChangePage = (event, newPage) => {
    setState({ ...state, page: newPage });
  };

  const handleChangeRowsPerPage = (event) => {
    setState({
      ...state,
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    });
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToolbar
          numSelected={selected.length}
          state={state}
          setState={setState}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={"medium"}
            aria-label="enhanced table"
          >
            <TableHeader
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      className={classes.tableRow}
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell
                        className={classes.checkbox}
                        padding="checkbox"
                      >
                        <Checkbox
                          className={classes.checkbox}
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        <div className={classes.customersBlock}>
                          <AccountCircleIcon className={classes.avatar} />
                          <Typography
                            className={classes.customerName}
                            variant="body2"
                          >
                            {row.customer} {row.lastCustomer}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell align="right">{row.lastSeen}</TableCell>
                      <TableCell align="right">{row.orders}</TableCell>
                      <TableCell align="right">{row.totalSpend}</TableCell>
                      <TableCell align="right">{row.latestPurchase}</TableCell>
                      <TableCell align="left">
                        {row.news ? (
                          <DoneOutlinedIcon />
                        ) : (
                          <ClearOutlinedIcon />
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
