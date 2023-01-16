import React from "react";

const Header = () => {
  return (
    <header className="menu__top header container">
      <span className="header__logo">menu</span>

      <div className="header__options options">
        <div className="options__item lang">
          <ul className="lang__list">
            <li className="lang__item">
              <img className="lang__icon" src="" alt="" />
              Укр
            </li>
            <li className="lang__item">
              <img className="lang__icon" src="" alt="" />
              EN
            </li>
          </ul>
        </div>
        <div className="options__item">
          <img className="options__icon" src="" alt="" />
          Вимкнути звук
        </div>
        <div className="options__item">
          <img className="options__icon" src="" alt="" />
          Людям із порушеннями зору
        </div>
      </div>
    </header>
  );
}

export default Header;