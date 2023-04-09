import React from "react";
import cn from "class-names";
import PropTypes from "prop-types";

const SquareButton = ({
  type,
  color,
  disabled,
  onClick,
  children,
  className,
  line,
  variant,
  textVariant,
  fullWidth
}) => {
  const classes = cn(
    "square-button", 
    {
			'button--full-width': fullWidth,
      [`button--${color}`]: color,
      [`button--${variant}`]: variant,
      [`button--${textVariant}`]: textVariant
    },
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
        <span className="square-button__text">{children}</span>
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
  className: PropTypes.string,
  line: PropTypes.bool,
  variant: PropTypes.string,
  textVariant: PropTypes.oneOf(["black", "white", "accent"]),
};

SquareButton.defaultProp = {
  type: "button",
  color: "",
  disabled: false,
  onClick: () => {},
  className: "",
  line: false,
  variant: "default",
  textVariant: "",
  fullWidth: ""
};

export default SquareButton;
