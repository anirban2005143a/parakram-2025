import React, { useState } from "react";
import HeroSection from "./heroSection/HeroSection";
import MemorySection from "./memories/MemorySection";
import Sponsers from "./sponsers/Sponsers";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/loader/Loader";
import { EventTimeline } from "../../components/aceternity/timeline";
import GalleryHeading from "./EventGallery/GalleryHeading";

const Home = () => {

  const [isLoaded, setisLoaded] = useState(true)

  return (
    <>
      {!isLoaded && <Loader />}
      <div id="homePage" className={`overflow-x-hidden relative ${isLoaded ? "" : "hidden"} `}>
        <Navbar />
        <HeroSection />
        {/* <GalleryHeading /> */}
        {/* <EventTimeline /> */}
        <MemorySection />
        <div className="mt-20"></div>
        <hr/>
        <Sponsers />
        <Footer />
      </div>
    </>
  );
};

export default Home;
