import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    cursor: "pointer",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "150px",
    height: "180px",
    margin: "2px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  gradient: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)",
    width: "150px",
    height: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      color: "#fff",
      cursor: "pointer",
    },
  },
});

import Typography from "@material-ui/core/Typography";

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundImage: "url(https://marmelab.com/posters/business-10.jpeg)",
      }}
      className={classes.root}
    >
      <div className={classes.gradient}>
        <Typography>Hands Clap</Typography>
        <Typography variant="caption">33 x 33 22$</Typography>
      </div>
    </div>
  );
}
