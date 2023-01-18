import React from "react";
import { Link } from "react-router-dom";
import cx from "class-names";

const path = [
  {
    path: "main",
    title: "головна",
  },
  {
    path: "main",
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
    path: "main",
    title: "Опитування",
  },
];

const Nav = ({ classNames }) => {
  const classes = cx("nav", classNames);

  return (
    <nav className={classes}>
      <div className="nav__col nav__col--main">
        <ul className="nav__list">
          {path?.map((el) => (
            <li className="nav__item">
              <Link to={el.path} className="menu__link">
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav__col">
        <ul className="nav__list">
          <li className="nav__item">
            <ul className="nav__list nav__list--inner">
              {path?.map((el) => (
                <li className="nav__item--inner">
                  <Link to={el.path} className="nav__link">
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="nav__item">
            <ul className="nav__list nav__list--inner">
              {path?.map((el) => (
                <li className="nav__item--inner">
                  <Link to={el.path} className="nav__link">
                    {el.title}
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
              {path?.map((el) => (
                <li className="nav__item--inner">
                  <Link to={el.path} className="nav__link">
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="nav__item">
            <ul className="nav__list nav__list--inner">
              {path?.map((el) => (
                <li className="nav__item--inner">
                  <Link to={el.path} className="nav__link">
                    {el.title}
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
