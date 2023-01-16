import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";

import Menu from "../Menu";
import SideBlock from "../SideBlock";
import Footer from "../Footer";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const menuHandle = () => setMenuOpen(() => !menuOpen);

  const scrollToTopHandle = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <>
      {menuOpen && <Menu />}

      <SideBlock
        isVisible={isVisible}
        isMenuOpen={menuOpen}
        scrollToTop={scrollToTopHandle}
        menuHandle={menuHandle}
        isSticky={isVisible}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
