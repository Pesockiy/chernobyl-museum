import React from "react";
import { PropTypes } from "prop-types";
import cx from "class-names";

import Social from "./Social";

const Socials = ({ className, data }) => {
  const classes = cx("socials", className);
  return (
    <div className={classes}>
      {data?.map((social) => (
        <Social {...social} />
      ))}
    </div>
  );
};

Socials.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
};

Socials.defaultProp = {
  className: "",
};

export default Socials;
