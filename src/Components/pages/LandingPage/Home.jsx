import React from "react";
import Heropage from "./Heropage";
import BibleSection from "./BibleSection";
import PrayerRequest from "../../PrayerRequest/PrayerRequest";
import SquarePictures from "../../SquarePictures/SquarePictures";
import ChurchFind from "../../ChurchFind/ChurchFind";
import ScrollCard from "../../card/card";
import ExploreFaith from "../../exploreFaith/faith";
import YourPrayer from "../../PrayerRequest/prayerinput/prayerinput";
import FullProfile from "../profile/myprofile/profile";
import Register from "../SignUp/Register";

const Home = () => {
  return (
    <>
      <Heropage />
      {/* <Register /> */}
      <ScrollCard />
      <BibleSection />
      <ChurchFind />
      {/* <SquarePictures /> */}
      <PrayerRequest />
      <FullProfile />
      <YourPrayer />
      
      {/* <ExploreFaith /> */}
    </>
  );
};

export default Home;
