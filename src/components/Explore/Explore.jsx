import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Explore = ({ img, title, icon, text, link }) => {
  
  return (
    <div className="explore">
      <div className="container">
        <h2 className="explore__title">{title}</h2>
      </div>
      <div
        className="explore__content"
        style={{ backgroundImage: `url(${img})` }}
      >
        {icon}
        <Link to={link} className="explore__text">
          {text}
        </Link>
      </div>
    </div>
  );
};

export default Explore;
