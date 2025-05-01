import React, { useEffect, useState } from "react";
import HeroSection from "./heroSection/HeroSection.jsx";
import MemorySection from "./memories/MemorySection.jsx";
import Sponsers from "./sponsers/Sponsers.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Loader from "../../components/loader/Loader.jsx";

const Home = () => {

  const [isLoaded, setisLoaded] = useState(true)

  return (
    <>
      {!isLoaded && <Loader />}
      <div id="homePage" className={`overflow-x-hidden relative ${isLoaded ? "" : "hidden"} `}>
        <Navbar />
        <HeroSection />
        <MemorySection />
        <div className="mt-20"></div>
        <hr />
        <Footer />
      </div>
    </>
  );
};

export default Home;
