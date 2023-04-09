import React from "react";
import { Field } from "formik";
import cn from "class-names";
import PropTypes from "prop-types";

const Input = ({
  id,
  type,
  name,
  label,
  placeholder,
  classNames,
  disabled,
  error,
  ...props
}) => {
  const classes = cn("input", error && `input--error`, classNames);

  return (
    <div className={classes}>
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <Field
        className="input__field"
        id={id}
        type={type}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        {...props}
      />
      {error && <span className="input__error">{error}</span>}
    </div>
  );
};

export default Input;
