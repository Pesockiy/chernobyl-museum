import React from "react";
import { PropTypes } from "prop-types";
import cx from "class-names";

const Line = ({ className }) => {
  const classes = cx("line", className);
  return <hr className={classes} />;
};

export default Line;
