import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Link from "next/link";

const useStyles = makeStyles({
  buttonStyle: {
    color: "#4f3cc9",
    fontWeight: "500",
    borderRadius: "10px",
    padding: "4px 5 px",
  },
});

export default function SimpleButton({ name, icon, link, ...custom }) {
  const classes = useStyles();

  return (
    <Link href={`${link}`}>
      <Button className={classes.buttonStyle} startIcon={icon} {...custom}>
        {name}
      </Button>
    </Link>
  );
}

SimpleButton.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};
