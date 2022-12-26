import { Field } from "formik";
import cn from "class-names";
import { PropTypes } from "prop-types";

const Checkbox = ({ id, name, label, classNames, disabled,  ...props }) => {
  const classes = cn("checkbox", classNames);

  return (
    <div className={classes}>
      <Field
        className="checkbox__field"
        id={id}
        type="checkbox"
        name={name}
        disabled={disabled}
        {...props}
      />
      <label className="checkbox__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  
}

export default Checkbox;
