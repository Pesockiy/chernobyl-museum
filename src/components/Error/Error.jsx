import React from "react";
import cx from "class-names";
import { PropTypes } from "prop-types";

import Button from "../../common/Button";

const errorData = {
  title: 404,
  text: "Такої сторінки не існуює",
};

const Error = ({ errorCode, title, text, className, children }) => {
  const classes = cx("error", className);

  return (
    <div className={classes}>
      <div className="error__inner container">
        <h1 className="error__title">{errorData.title}</h1>
        <p className="error__text">{errorData.text}</p>
        {children}
        {errorCode === "404" && (
          <Button
            asLink
            href="/"
            className="error__button"
            textColor="white"
            line
            fullWidth
          >
            На головну
          </Button>
        )}
      </div>
    </div>
  );
};

Error.propTypes = {
  errorCode: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Error;
