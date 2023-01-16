import React from "react";
import { PropTypes } from "prop-types";

import Line from "../../common/Line";

const MainTop = ({ data }) => {
  const { title, img, texts } = data;
  
  return (
    <>
      <div className="main-top">
        <div className="container">
          {title && <h1 className="main-top__title">{title}</h1>}
          {img && <img className="main-top__img" src={img} alt="" />}
          {texts &&
            texts.map((text, index, arr) => (
              <>
                <p className="main-top__text">{text}</p>
                {arr.length - 1 > index && <Line className="main-top__line" />}
              </>
            ))}
        </div>
      </div>
    </>
  );
};

MainTop.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  texts: PropTypes.array,
};

export default MainTop;
