import React from "react";

import { ReactComponent as Sound } from "../../assets/icons/volume_up_24px_outlined.svg";
import { ReactComponent as Eye } from "../../assets/icons/visibility_24px.svg";
import { ReactComponent as UaFlag } from "../../assets/icons/flag-for-flag-ukraine-svgrepo-com.svg";
import { ReactComponent as UsaFlag } from "../../assets/icons/flag-for-flag-united-states-svgrepo-com.svg";

const Header = () => {
  return (
    <header className="menu__top header container">
      <span className="header__logo">menu</span>

      <div className="header__options options">
        <div className="options__item lang">
          <ul className="lang__list">
            <li className="lang__item">
              <UaFlag />
              Укр
            </li>
            <li className="lang__item">
              <UsaFlag />
              EN
            </li>
          </ul>
        </div>
        <div className="options__item">
          <Sound />
          Вимкнути звук
        </div>
        <div className="options__item">
          <Eye />
          Людям із порушеннями зору
        </div>
      </div>
    </header>
  );
};

export default Header;
