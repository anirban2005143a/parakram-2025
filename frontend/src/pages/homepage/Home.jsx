import React, { useState } from "react";
import HeroSection from "./heroSection/HeroSection";
import MemorySection from "./memories/MemorySection";
import EventsCarousel from "./EventGallery/EventsCarousel";
import Sponsers from "./sponsers/Sponsers";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/loader/Loader";
import AutoSlidingCarousel from "./heroSection/carousel";
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
        <GalleryHeading />
        <EventTimeline />
        {/* <EventsCarousel /> */}
        <MemorySection />
        <Sponsers />
        <Footer />
      </div>
    </>
  );
};

export default Home;
