import React, { useState } from "react";
import { PropTypes } from "prop-types";

import Event from "../Event";
import SquareButton from "../../common/SquareButton/SquareButton";

import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

const UpcomingEvents = ({ events }) => {
  const [data, setData] = useState(events.slice(0,3));

  const showMore = () => {
    setData(events.slice(0,6));
  };

  return (
    <div className="upcoming-events">
      <div className="container">
        <h2 className="upcoming-events__title">Найближчі події</h2>
        <div className="upcoming-events__inner">
          {data?.map((event) => (
            <Event key={event.id} {...event} />
          ))}
          <SquareButton onClick={showMore}>
            <Arrow />
            Ще події
          </SquareButton>
        </div>
      </div>
    </div>
  );
};

UpcomingEvents.propTypes = {
  events: PropTypes.array.isRequired,
};

export default UpcomingEvents;
