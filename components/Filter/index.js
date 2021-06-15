import React from "react";
// material UI
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import Typography from "@material-ui/core/Typography";
// redux
import { useSelector } from "react-redux";
//components
import FilterListItem from "./listItem";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiList-padding": {
      paddingTop: "0px",
      paddingBottom: "0px",
    },
    "& .MuiTypography-body1": {
      paddingLeft: "16px",
      fontSize: "14px",
      fontWeight: "400",
      fontFamily: "Roboto , sans-serif",
    },
  },
  headerStyle: {
    display: "flex",
    marginTop: "16px",
    "& > *": {
      marginLeft: "4px",
    },
  },
}));

export default function CategoriesFilter() {
  const classes = useStyles();
  const { categoriesArray } = useSelector(({ categories }) => categories);

  return (
    <div className={classes.root}>
      <div className={classes.headerStyle}>
        <LocalOfferOutlinedIcon />
        <Typography variant="overline" display="block" gutterBottom>
          categories
        </Typography>
      </div>
      <List>
        {categoriesArray.map((item) => (
          <FilterListItem key={item.id} item={item} />
        ))}
      </List>
    </div>
  );
}
