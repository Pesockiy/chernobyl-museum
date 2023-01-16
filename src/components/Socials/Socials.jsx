import React from "react";
import cx from "class-names";

import Social from "./Social";

const Socials = ({ className, data }) => {
  const classes = cx("socials", className);
  return (
    <div className={classes}>
      {data?.map((social) => (
        <Social {...social} />
      ))}
    </div>
  );
};

export default Socials;
