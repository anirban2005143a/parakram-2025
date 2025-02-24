import React from "react";
import HeroSection from "./heroSection/HeroSection";
import NavbarDemo from "../../components/navbar/Navbar1.jsx";
import MemorySection from "./memories/MemorySection";
import EventsCarousel from "./gallery/EventsCarousel";
import Sponsers from "./sponsers/Sponsers";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <div id="homePage" className=" overflow-x-hidden relative">
        <div className=" fixed top-0 left-0 w-screen h-screen z-0 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <Navbar />
        <HeroSection />
        <EventsCarousel />
        <MemorySection />
        <Sponsers />
      </div>
    </>
  );
};

export default Home;
