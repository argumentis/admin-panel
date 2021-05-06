import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiListItem-root": {
      height: "30px",
    },

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
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleCanselSelected = () => {
    setSelectedIndex("0");
  };

  return (
    <div className={classes.root}>
      <div className={classes.headerStyle}>
        <LocalOfferOutlinedIcon />
        <Typography variant="overline" display="block" gutterBottom>
          categories
        </Typography>
      </div>
      <List>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemText primary="Animals" />
          {selectedIndex === 1 ? (
            <ListItemSecondaryAction>
              <IconButton onClick={handleCanselSelected} size="small">
                <HighlightOffIcon />
              </IconButton>
            </ListItemSecondaryAction>
          ) : (
            <ListItemSecondaryAction />
          )}
        </ListItem>
      </List>
    </div>
  );
}
