import PropTypes from "prop-types";
import cx from "class-names";

import NavItem from "./NavItem";

import {
  mainNavPaths,
  museumNavPaths,
  infoNavPaths,
  comandNavPaths,
} from "../../mock/nav";

const Nav = ({ classNames }) => {
  const classes = cx("nav", classNames);

  return (
    <nav className={classes}>
      <div className="nav__col nav__col--main">
        <NavItem path={mainNavPaths} className="nav__col--main" />
      </div>
      <div className="nav__col">
        <NavItem path={museumNavPaths} />
        <NavItem path={infoNavPaths} />
      </div>
      <div className="nav__col">
        <NavItem path={comandNavPaths} />
      </div>
    </nav>
  );
};

export default Nav;
