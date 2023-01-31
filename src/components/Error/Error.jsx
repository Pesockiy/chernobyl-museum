import React from "react";
import { useNavigate } from "react-router-dom";
import cx from "class-names";
import { PropTypes } from "prop-types";
import Button from "../../common/Button";

const errorData = {
  title: 404,
  text: "Такої сторінки не існуює",
};

const Error = ({ errorCode, title, text, className, children, link }) => {
  const classes = cx("error", className);

  const navigate = useNavigate();

  return (
    <div className={classes}>
      <div className="error__inner container">
        <h1 className="error__title">{errorData.title}</h1>
        <p className="error__text">{errorData.text}</p>
        {children}
        {errorCode === "404" && (
          <Button
            onClick={() => {
              navigate(link);
            }}
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
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Error;
