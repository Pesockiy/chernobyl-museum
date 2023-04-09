import React from "react";
import PropTypes from "prop-types";

const MainTop = ({ data }) => {
  const { title, img, texts } = data;

  return (
    <>
      <div className="main-top">
        <div className="container">
          {title && <h1 className="main-top__title">{title}</h1>}
          <div className="main-top__inner">
            {img && <img className="main-top__img" src={img} alt="" />}
            {texts &&
              texts.map((text) => (
                <>
                  <p className="main-top__text">{text}</p>
                </>
              ))}
          </div>
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
