import React from "react";
import cx from "class-names";
import { PropTypes } from "prop-types";

import { ReactComponent as Burger } from "../../assets/icons/burger.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

const SideBlock = ({
  scrollToTopHandle,
  openMenuHandle,
  isVisible,
  isMenuOpen,
  style,
}) => {
  const classes = cx(
    "side-block",
    isMenuOpen && "side-block--white",
    isMenuOpen && "side-block--fixed"
  );

  const buttonMenuClasses = cx(
    "side-block__button",
    "side-block__button--menu"
  );

  const buttonScrollTopClasses = cx(
    "side-block__button",
    "side-block__button--scroll-top",
    isVisible && "is-visible"
  );

  return (
    <div className={classes} style={style}>
      <button className={buttonMenuClasses} onClick={openMenuHandle}>
        {!isMenuOpen ? <Burger /> : <Close />}
      </button>

      {!isMenuOpen && (
        <button className={buttonScrollTopClasses} onClick={scrollToTopHandle}>
          <Arrow className="side-block__arrow" />
        </button>
      )}
    </div>
  );
};

SideBlock.propTypes = {
  scrollToTopHandle: PropTypes.func.isRequired,
  openMenuHandle: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
  style: PropTypes.string,
};

SideBlock.defaultProp = {
  isVisible: false,
  isMenuOpen: false,
  style: "",
};

export default SideBlock;
