import React, { useState } from "react";
import HeroSection from "./heroSection/HeroSection";
import MemorySection from "./memories/MemorySection";
import EventsCarousel from "./EventGallery/EventsCarousel";
import Sponsers from "./sponsers/Sponsers";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/loader/Loader";
import AutoSlidingCarousel from "./heroSection/carousel";

const Home = () => {
  const [isLoaded, setisLoaded] = useState(true)


  return (
    <>
      {!isLoaded && <Loader />}
      <div id="homePage" className={`overflow-x-hidden relative ${isLoaded ? "" : "hidden"} `}>
        <div className=" fixed top-0 left-0 w-screen h-screen z-0 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <Navbar />
        <AutoSlidingCarousel />
        {/* <HeroSection setisLoaded={setisLoaded} /> */}
        <EventsCarousel />
        <MemorySection />
        <Sponsers />
        <Footer />
      </div>
    </>
  );
};

export default Home;
