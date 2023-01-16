import React from "react";

import MainInfo from "../components/MainInfo";
import MainTop from "../components/MainTop";
import Wellcome from "../components/Wellcome";

import { mainInfoData, mainTopData } from "../mock/main";
import Image from "../assets/img/main/9.jpg";

const Main = () => {
  return (
    <>
      <MainTop data={{ ...mainTopData, img: Image }} />
      <Wellcome />
      <MainInfo data={mainInfoData} />
    </>
  );
};

export default Main;
