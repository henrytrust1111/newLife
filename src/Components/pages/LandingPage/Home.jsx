import React from "react";
import Heropage from "./Heropage";
import BibleSection from "./BibleSection";
import PrayerRequest from "../../PrayerRequest/PrayerRequest";
import SquarePictures from "../../SquarePictures/SquarePictures";
import ChurchFind from "../../ChurchFind/ChurchFind";

const Home = () => {
  return (
    <>
      <Heropage />
      <BibleSection />
      <ChurchFind />
      {/* <SquarePictures /> */}
      {/* <PrayerRequest /> */}
    </>
  );
};

export default Home;
