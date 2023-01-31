import React from "react";
import { PropTypes } from "prop-types";
import cx from "class-names";

import Line from "../../common/Line";

const ProgressBar = ({ value, line, className }) => {
  const percents = `${value || 0}%`;
  const classes = cx("progress-bar", className);

  return (
    <div className={classes}>
      <div className="progress-bar__label">{percents}</div>
      <div className="progress-bar__progress" style={{ width: percents }}></div>
      {line && <Line className="progress-bar__line" />}
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number,
  line: PropTypes.node,
  className: PropTypes.string,
};

ProgressBar.defaultProp = {
  value: 0,
  line: false,
  className: "",
};

export default ProgressBar;
