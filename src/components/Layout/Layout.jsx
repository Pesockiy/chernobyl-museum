import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";

import Menu from "../Menu";
import SideBlock from "../SideBlock";
import Footer from "../Footer";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);
  const [i, setI] = useState(true);

  const menuHandle = () => setMenuOpen(() => !menuOpen);

  const footerRef = useRef();

  const scrollToTopHandle = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisible = () => {
    // setI(footerRef.current.offsetTop + 120 > document.documentElement.scrollTop - footerRef.current.offsetHeight + window.screen.height)
    // console.log(footerRef.current.offsetTop + footerRef.current.offsetHeight - ( document.documentElement.scrollTop + window.screen.height) - 160)
    setI(
      footerRef.current.offsetTop +
        footerRef.current.offsetHeight -
        (document.documentElement.scrollTop + window.screen.height) >
        80
    );
    // console.log(footerRef.current.offsetTop + footerRef.current.offsetHeight - ( document.documentElement.scrollTop + window.screen.height))
    // setI(footerRef.current.offsetTop + footerRef.current.offsetHeight  > document.documentElement.scrollTop + window.screen.height)
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    
    }
    if (scrolled > window.screen.height) {
      setSticky(true);
    } else if (scrolled <= window.screen.height ) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  // useEffect(() => {

  //   setFooterHeight(footerRef.current.offsetTop + footerRef.current.offsetHeight - ( document.documentElement.scrollTop + window.screen.height) - 160)
  //   console.log(footerHeight)
  // }, [i]);

  return (
    <>
      {menuOpen && <Menu />}
      <div className="b">
        <SideBlock
          isVisible={isVisible}
          isMenuOpen={menuOpen}
          scrollToTop={scrollToTopHandle}
          menuHandle={menuHandle}
          isSticky={isSticky}
          // style={{ bottom: !i && 160 - footerHeight + "px" }}
        />
      <Outlet />
      </div>
      <Footer ref={footerRef} />
    </>
  );
};

export default Layout;
