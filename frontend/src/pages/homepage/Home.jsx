import React, { useState } from "react";
import HeroSection from "./heroSection/HeroSection.jsx";
import MemorySection from "./memories/MemorySection.jsx";
import Sponsers from "./sponsers/Sponsers.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Loader from "../../components/loader/Loader.jsx";
import { EventTimeline } from "../../components/aceternity/timeline.jsx";
import GalleryHeading from "./EventGallery/GalleryHeading.jsx";

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
        {/* <Sponsers /> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
