import React from "react";
import { PropTypes } from "prop-types";
import cx from "class-names";

const Social = ({ href, icon, text, className }) => {
  const classes = cx("social", className);
  return (
    <>
      <a className={classes} href={href}>
        {icon && icon}
        {text && text}
      </a>
    </>
  );
};

Social.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Social.defaultProp = {
  className: "",
};

export default Social;
