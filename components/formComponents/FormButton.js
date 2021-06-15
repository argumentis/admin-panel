import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

export default function FormButton({ name, icon, ...custom }) {
  return (
    <Button endIcon={icon} {...custom}>
      {name}
    </Button>
  );
}

FormButton.propTypes = {
  icon: PropTypes.object,
  name: PropTypes.string.isRequired,
};
