import React from "react";
import PropTypes from "prop-types";
// material UI
import { makeStyles } from "@material-ui/core/styles";
// next
import Link from "next/link";

const useStyles = makeStyles({
  headerBlock: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundImage: "url(cardBackground.png)",
    backgroundRepeat: "no-repeat",
    height: "90px",
    padding: "16px",
  },
  iconStyle: {
    color: "rgb(220, 36, 64)",
  },
  headerText: {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: "16px",
    fontFamily: "Roboto , sans-serif",
    fontWeight: "400",
  },
  contentText: {
    fontSize: "24px",
    fontFamily: "Roboto , sans-serif",
    fontWeight: "400",
  },
  headerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
});

export default function CardHeader({ pathname, name, item, icon }) {
  const classes = useStyles();

  return (
    <Link href={pathname}>
      <div className={classes.headerBlock}>
        <div className={classes.iconStyle}>{icon}</div>
        <div className={classes.headerContent}>
          <div className={classes.headerText}>{name}</div>
          <div className={classes.contentText}>{item.length}</div>
        </div>
      </div>
    </Link>
  );
}

CardHeader.propTypes = {
  pathname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  item: PropTypes.array.isRequired,
  icon: PropTypes.object.isRequired,
};
