import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import cx from "class-names";

const path = [
  {
    path: "",
    title: "головна",
  },
  {
    path: "sdsf",
    title: "Придбати квитки",
  },
  {
    path: "main",
    title: "події",
  },
  {
    path: "main",
    title: "Новини",
  },
  {
    path: "main",
    title: "3D тур",
  },
  {
    path: "main",
    title: "проєкти музею",
  },
  {
    path: "quiz",
    title: "Опитування",
  },
];

const Nav = ({ openHandler, classNames }) => {
  const navigate = useNavigate();

  const classes = cx("nav", classNames);

  const toggleMenu = async (e, path) => {
    e.preventDefault();
    navigate(path, true);
    openHandler((prev) => !prev);
  };

  return (
    <nav className={classes}>
      <div className="nav__col nav__col--main">
        <ul className="nav__list">
          {path?.map(({ title, path }) => (
            <li key={title} className="nav__item">
              <Link onClick={(e) => toggleMenu(e, path)} className="menu__link">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav__col">
        <ul className="nav__list">
          <li className="nav__item">
            <ul className="nav__list nav__list--inner">
              {path?.map(({ title, path }) => (
                <li className="nav__item--inner">
                  <Link
                    onClick={(e) => toggleMenu(e, path)}
                    className="nav__link"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="nav__item">
            <ul className="nav__list nav__list--inner">
              {path?.map(({ title, path }) => (
                <li className="nav__item--inner">
                  <Link
                    onClick={(e) => toggleMenu(e, path)}
                    className="nav__link"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div className="nav__col">
        <ul className="nav__list">
          <li className="nav__item">
            <ul className="nav__list nav__list--inner">
              {path?.map(({ title, path }) => (
                <li className="nav__item--inner">
                  <Link
                    onClick={(e) => toggleMenu(e, path)}
                    className="nav__link"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="nav__item">
            <ul className="nav__list nav__list--inner">
              {path?.map(({ title, path }) => (
                <li className="nav__item--inner">
                  <Link
                    onClick={(e) => toggleMenu(e, path)}
                    className="nav__link"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
