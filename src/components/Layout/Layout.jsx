import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { useScrollTop } from "../../hooks";

import Menu from "../Menu";
import SideBlock from "../SideBlock";
import Footer from "../Footer";

import { smoothScroll } from "../../helpers";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible] = useScrollTop();
  let location = useLocation();

  const menuHandle = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    isMenuOpen && setIsMenuOpen(false);
  }, [location]);

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
