import React from "react";
import { PropTypes } from "prop-types";
import cx from "class-names";

const Img = ({ src, alt, display, className }) => {
  const classes = cx("img", className);
  return (
    <div className={classes}>
      <img
        style={{ display }}
        className={classes}
        src={src}
        alt={alt}
        loading="lazy"
      />
    </div>
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  display: PropTypes.bool,
};

Img.defaultProp = {
  src: "https://via.placeholder.com/600/771796",
  alt: "img text",
  display: "inline",
  className: ""
};

export default Img;
