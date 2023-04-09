import React from "react";

import MainInfo from "../../components/MainInfo";
import MainTop from "../../components/MainTop";
import Wellcome from "../../components/Wellcome";
import Quiz from "../../components/Quiz";

import { Icon } from "../../common/Icon/Icon";

import Img from "../../common/Img";

import d from "../../assets/img/panorama-hall.jpg";
import img from "../../assets/img/3d-map.jpg";

import { mainInfoData, mainTopData, eventsData } from "../../mock/main";

import Image from "../../assets/img/main/9.jpg";
import Explore from "../../components/Explore/Explore";
import UpcomingEvents from "../../components/UpcomingEvents";

const Main = () => {
  return (
    <>
      <MainTop data={{ ...mainTopData, img: Image }} />
      <Wellcome />
      <MainInfo data={mainInfoData} />
      <Img display="block" src={d} />
      <UpcomingEvents events={eventsData} />
      <Explore
        img={img}
        title="Досліджуй вдома"
        text="тисніть, щоб відвідати 3D тур по музею"
        link="/"
        icon={<Icon icon="sphere" size="70" color="#fff"/>}
      />
      <Quiz />
    </>
  );
};

export default Main;
