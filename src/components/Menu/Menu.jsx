import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <Header />

        <div className="menu__content">
          <Nav classNames="menu__nav" />
        </div>
      </div>
    </>
  );
}

export default Menu;