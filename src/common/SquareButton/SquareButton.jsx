import React from "react";
import cn from "class-names";
import { PropTypes } from "prop-types";

const SquareButton = ({
  type,
  color,
  disabled,
  onClick,
  children,
  classNames,
  line,
  variant,
  textVariant,
  fullWidth
}) => {
  const classes = cn(
    "button",
    color === "accent" && `button--${color}`,
    fullWidth && "button--full-width",
    variant === "outlined" && `button--${variant}`,
    textVariant === "black"
      ? "button--text-black"
      : textVariant === "accent"
      ? "button--text-accent"
      : textVariant === "white"
      ? "button--text-white"
      : "",
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

SquareButton.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
  line: PropTypes.bool,
  variant: PropTypes.string,
  textVariant: PropTypes.oneOf(["black", "white", "accent"]),
};

SquareButton.defaultProp = {
  type: "button",
  color: "",
  disabled: false,
  onClick: () => {},
  classNames: "",
  line: false,
  variant: "default",
  textVariant: "",
  fullWidth: ""
};

export default SquareButton;
