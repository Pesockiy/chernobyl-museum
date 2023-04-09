import React from "react";

import { Icon } from "../../common/Icon/Icon";

const Header = () => {
  return (
    <header className="menu__top header container">
      <span className="header__logo">menu</span>

      <div className="header__row">
        <div className="header__col lang">
          <ul className="lang__list">
            <li className="lang__item">
              <Icon icon="flag-for-flag-ukraine-svgrepo-com" color="#fff" />
              Укр
            </li>
            <li className="lang__item">
              <Icon
                icon="flag-for-flag-united-states-svgrepo-com"
                color="#fff"
              />
              EN
            </li>
          </ul>
        </div>
        <div className="header__col">
          <Icon icon="volume_up_24px_outlined" color="#fff" />
          Вимкнути звук
        </div>
        <div className="header__col">
          <Icon icon="visibility_24px" color="#fff" />
          Людям із порушеннями зору
        </div>
      </div>
    </header>
  );
};

export default Header;
