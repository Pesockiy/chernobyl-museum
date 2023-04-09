import React from "react";
import { Link } from "react-router-dom";
import cx from "class-names";

const NavItem = ({ path, innerPath }) => {
  return (
    <ul className="nav__list">
      {!innerPath ? (
        path?.map(({ title, path }) => (
          <li className="nav__item">
            <Link
              to={path}
              className="nav__link"
            >
              {title}
            </Link>
          </li>
        ))
      ) : (
        <li className="nav__item">
          <ul className="nav__list nav__list--inner">
            {innerPath?.map(({ title, path }) => (
              <li className="nav__item--inner">
                <Link
                  to={path}
                  className="nav__link"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      )}
    </ul>
  );
};

export default NavItem;
