import React from "react";
import { PropTypes } from "prop-types";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";

const Menu = ({openHandler}) => {
  
  return (
    <>
      <div className="menu">
        <Header />

        <div className="menu__content">
          <Nav openHandler={openHandler} classNames="menu__nav" />
        </div>
      </div>
    </>
  );
};

export default Menu;
