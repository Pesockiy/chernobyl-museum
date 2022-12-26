import React from "react";
import cn from "class-names";
import { PropTypes } from "prop-types";

const Button = ({
  type,
  color,
  disabled,
  onClick,
  children,
  classNames,
  line,
}) => {
  const classes = cn(
    "button",
    color === "accent" && `button--${color}`,
    classNames
  );

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={classes}
    >
      <>
        {line && <hr className="button__line" />}
        <span className="button__text">{children}</span>
      </>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
  line: PropTypes.bool,
};

Button.defaultProp = {
  type: "button",
  color: "",
  disabled: false,
  onClick: () => {},
  classNames: "",
  line: false,
};

export default Button;
