import React, { useState } from "react";
import HeroSection from "./heroSection/HeroSection";
import MemorySection from "./memories/MemorySection";
import Sponsers from "./sponsers/Sponsers";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/loader/Loader";
import { EventTimeline } from "../../components/aceternity/timeline";
import GalleryHeading from "./EventGallery/GalleryHeading";
import Hyperspeed from "../../components/reactBits/HyperSpeed";

const Home = () => {

  const [isLoaded, setisLoaded] = useState(true)



  return (
    <>
      {!isLoaded && <Loader />}
      <div id="homePage" className={`overflow-x-hidden relative ${isLoaded ? "" : "hidden"} `}>
        <Navbar />
        <HeroSection />
        {/* <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        /> */}
        <GalleryHeading />
        <EventTimeline />
        <MemorySection />
        <Sponsers />
        <Footer />
      </div>
    </>
  );
};

export default Home;
