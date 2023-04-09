import React from "react";
import PropTypes from "prop-types";
import cx from "class-names";

import Button from "../../common/Button";
import Line from "../../common/Line";

const Event = ({ img, title, date, text, clickHandle, className }) => {
  const classes = cx("event", className);

  return (
    <div className={classes}>
      <img className="event__img" src={img} alt={text} />
      <div className="event__title">
        {title} {date}
      </div>
      <Line className="event__line" />
      <p className="event__text">{text}</p>

      <Button
        textColor="accent"
        className="event__button"
        line
        onClick={clickHandle}
      >
        Докладніше
      </Button>
    </div>
  );
};

Event.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickHandle: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Event.defaultProps = {
  className: "",
};

export default Event;
