import React from "react";
import { PropTypes } from "prop-types";

const MainInfo = ({ data }) => {
  return (
    <div className="main-info">
      <div className="main-info__inner container">
        {data?.map(({ title, text }) => (
          <div className="main-info__item">
            <h3 className="main-info__title">{title}</h3>
            <p className="main-info__text">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

MainInfo.propTypes = {
  data: PropTypes.array,
};

export default MainInfo;
