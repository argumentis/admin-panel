import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableHeader from "./components/TableHeader";
import SimpleButton from "../../../shared/SimpleButton";
import Typography from "@material-ui/core/Typography";
import { getComparator, stableSort } from "./helpers";
import CreateIcon from "@material-ui/icons/Create";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },

  name: {
    color: "#4f3cc9",
    textDecoration: "underline",
  },
}));

const initialState = {
  order: "asc",
  orderBy: "customer",
  page: 0,
  rowsPerPage: 5,
};

export default function ProductTable() {
  const classes = useStyles();
  const [state, setState] = useState(initialState);
  const { order, orderBy, page, rowsPerPage } = state;
  const searchResult = [
    {
      id: "132",
      image: "https://rost-info.com/wp-content/uploads/2019/08/0572945.jpg",
      reference: "Computer Blue",
      price: "10,0 $",
      width: "11,0",
      height: "14,5",
      stock: "130",
      sales: "17",
    },
    {
      id: "122",
      image: "https://stihi.ru/pics/2015/05/30/8014.jpg",
      reference: "Funny hedgehog",
      price: "20,0 $",
      width: "21,0",
      height: "24,5",
      stock: "230",
      sales: "27",
    },
  ];

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setState({ ...state, order: isAsc ? "desc" : "asc", orderBy: property });
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

  return (
    <div className={classes.root}>
      <TableContainer>
        <Table
          className={classes.table}
          aria-labelledby="tableTitle"
          size={"medium"}
          aria-label="enhanced table"
        >
          <TableHeader
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={searchResult.length}
          />
          <TableBody>
            {stableSort(searchResult, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                  >
                    <TableCell align="left">
                      <img src={row.image} width={25} height={20} />
                    </TableCell>
                    <Link href={`/products/${row.id}`}>
                      <TableCell component="th" scope="row" padding="none">
                        <Typography className={classes.name} variant="body2">
                          {row.reference}
                        </Typography>
                      </TableCell>
                    </Link>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.width}</TableCell>
                    <TableCell align="right">{row.height}</TableCell>
                    <TableCell align="right">{row.stock}</TableCell>
                    <TableCell align="right">{row.sales}</TableCell>
                    <TableCell align="right">
                      <SimpleButton
                        name={"edit"}
                        icon={<CreateIcon />}
                        link={"/"}
                      />
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
        count={searchResult.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}
