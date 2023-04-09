import React from "react";
import cx from "class-names";
import PropTypes from "prop-types";

import { Icon } from "../../common/Icon/Icon";

const SideBlock = ({
  scrollToTopHandle,
  openMenuHandle,
  isVisible,
  isMenuOpen,
  style,
}) => {
  const classes = cx(
    "side-block",
    { 
      "side-block--white": isMenuOpen,
      "side-block--fixed": isMenuOpen
    }
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
        {!isMenuOpen ? <Icon icon="burger" /> : <Icon icon="close" color="#fff" />}
      </button>

      {!isMenuOpen && (
        <button className={buttonScrollTopClasses} onClick={scrollToTopHandle}>
          <Icon classNames="side-block__arrow" icon="arrow"/>
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
