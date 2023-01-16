import React from "react";
import cx from "class-names";

import { ReactComponent as Burger } from "../../assets/icons/burger.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

const SideBlock = ({
  scrollToTop,
  menuHandle,
  isVisible,
  isMenuOpen,
  isSticky,
  style,
}) => {
  const classes = cx(
    "side-block",
    isSticky && "side-block--sticky",
    isMenuOpen && "side-block--white"
  );

  const buttonClasses = cx(
    "side-block__button",
    "side-block__button--scroll-top",
    isVisible && "is-visible"
  );

  return (
    <div className={classes} style={style}>
      <button
        className="side-block__button side-block__button--menu"
        onClick={menuHandle}
      >
        {!isMenuOpen ? <Burger /> : <Close />}
      </button>

      {!isMenuOpen && (
        <button className={buttonClasses} onClick={scrollToTop}>
          <Arrow className="side-block__arrow" />
        </button>
      )}
    </div>
  );
};

export default SideBlock;
