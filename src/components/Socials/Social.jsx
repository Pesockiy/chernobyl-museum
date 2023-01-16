import React from "react";
import cx from "class-names";

const Social = ({ href, icon, text, className }) => {
  const classes = cx("social", className);
  return (
    <>
      <a className={classes} href={href}>
        {icon && icon}
        {text && text}
      </a>
    </>
  );
};

export default Social;
