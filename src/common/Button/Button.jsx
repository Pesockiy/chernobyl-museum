import React from "react";
import { Link } from "react-router-dom";
import cn from "class-names";
import PropTypes from "prop-types";

const Button = ({
  type,
  color,
  asLink,
  href,
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
    {
      "button--full-width": fullWidth,
      [`button--${variant}`]: variant,
      [`button--${color}`]: color,
      [`button--${textColor}`]: textColor,
    },
    className
  );

  return (
    <>
      {asLink ? (
        <Link disabled={disabled} className={classes} to={href}>
          <>
            {line && <hr className="button__line" />}
            <span className="button__text">{children}</span>
          </>
        </Link>
      ) : (
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
      )}
    </>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  asLink: PropTypes.bool,
  to: PropTypes.string,
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
  href: "",
  asLink: false,
  disabled: false,
  onClick: () => {},
  line: false,
  variant: "default",
};

export default Button;
