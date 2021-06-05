import React, { useState } from "react";
import PropTypes from "prop-types";
// maretial UI
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
// components
import TableHeader from "./components/TableHeader";
import TableToolbar from "./components/TableToolbar";
import TableRowItem from "./components/TableRowItem";
import { getComparator, stableSort } from "./helpers";

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
  headerCheckbox: {
    paddingLeft: "10px",
    "& .Mui-checked": {
      color: "#4f3cc9",
    },
  },
  tableBody: {
    "& .Mui-selected": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
    "& .Mui-selected:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
  },
}));

const initialState = {
  order: "asc",
  orderBy: "date",
  selected: [],
  page: 0,
  rowsPerPage: 5,
};

export default function ReviewsTable({
  searchResult,
  drawerStatus,
  setDrawerStatus,
}) {
  const classes = useStyles();
  const [state, setState] = useState(initialState);
  const { order, orderBy, selected, page, rowsPerPage } = state;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setState({ ...state, order: isAsc ? "desc" : "asc", orderBy: property });
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = searchResult.map((n) => n.id);
      setState({ ...state, selected: newSelecteds });
      return;
    }
    setState({ ...state, selected: [] });
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
              rowCount={searchResult.length}
            />
            <TableBody className={classes.tableBody}>
              {stableSort(searchResult, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRowItem
                      key={row.id}
                      drawerStatus={drawerStatus}
                      setDrawerStatus={setDrawerStatus}
                      isItemSelected={isItemSelected}
                      labelId={labelId}
                      state={state}
                      setState={setState}
                      row={row}
                    />
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={searchResult.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

ReviewsTable.propTypes = {
  searchResult: PropTypes.array.isRequired,
};
