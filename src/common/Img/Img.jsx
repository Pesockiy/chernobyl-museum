import React from "react";
import { PropTypes } from "prop-types";
import cx from "class-names";

const Img = ({ src, alt, classNames }) => {
  const classes = cx("img", classNames);
  return (
    <div className={classes}>
      <img className={classes} src={src} alt={alt} loading="lazy" />
    </div>
  );
};

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Img;
