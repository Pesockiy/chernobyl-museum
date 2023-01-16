import React from "react";
import { Link } from "react-router-dom";
import cx from "class-names";

export default function Nav({ classNames }) {
  const classes = cx("nav", classNames);

  return (
    <nav className={classes}>
      <ul className="menu__list">
        <li className="menu__item">
          <Link to="/" className="menu__link">
            головна
          </Link>
        </li>
      </ul>
      <h1 style={{ color: "red" }}>menu</h1>
    </nav>
  );
}
