import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { useScroll } from "../../hooks";

import Menu from "../Menu";
import SideBlock from "../SideBlock";
import Footer from "../Footer";

import { smoothScroll } from "../../helpers";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible] = useScroll();

  const menuHandle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {isMenuOpen && <Menu openHandler={setIsMenuOpen} />}

      <main className="main">
        <SideBlock
          isVisible={isVisible}
          isMenuOpen={isMenuOpen}
          scrollToTopHandle={smoothScroll}
          openMenuHandle={menuHandle}
        />

        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
