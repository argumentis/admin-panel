import React from "react";
import PropTypes from "prop-types";
// material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// next
import Link from "next/link";

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

export default function MediaCard({ item }) {
  const classes = useStyles();
  const { image, reference, width, height, price, id } = item;

  return (
    <Link href={`/products/${id}`}>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className={classes.root}
      >
        <div className={classes.gradient}>
          <Typography>{reference}</Typography>
          <Typography variant="caption">{`${width}x${height}  ${price}$`}</Typography>
        </div>
      </div>
    </Link>
  );
}

MediaCard.propTypes = {
  item: PropTypes.object.isRequired,
};
