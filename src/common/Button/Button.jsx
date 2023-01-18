import React from "react";
import cn from "class-names";
import { PropTypes } from "prop-types";

const Button = ({
  type,
  color,
  disabled,
  onClick,
  children,
  className,
  line,
  variant,
  textColor,
  fullWidth,
}) => {
  const classes = cn(
    "button",
    color === "accent" && "button--accent",
    fullWidth && "button--full-width",
    variant === "outlined" && "button--outlined",
    textColor === "black"
      ? "button--text-black"
      : textColor === "accent"
      ? "button--text-accent"
      : textColor === "white"
      ? "button--text-white"
      : "",
    className
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
  textColor: PropTypes.oneOf(["black", "white", "accent"]),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  line: PropTypes.bool,
  variant: PropTypes.string,
};

Button.defaultProp = {
  type: "button",
  disabled: false,
  onClick: () => {},
  line: false,
  variant: "default",
};

export default Button;
