import React, { useState } from "react";
import HeroSection from "./heroSection/HeroSection";
import MemorySection from "./memories/MemorySection";
import EventsCarousel from "./EventGallery/EventsCarousel";
import Sponsers from "./sponsers/Sponsers";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/loader/Loader";
import AutoSlidingCarousel from "./heroSection/carousel";
import { Timeline } from "../../components/aceternity/timeline";


import footballImg from '/sports/football1.jpg'
import footbal2Img from '/sports/football2.jpg'
import cricket1Img from '/sports/cricket1.jpg'
import cricket2Img from '/sports/cricket2.jpg'
import squash1Img from '/sports/squash1.jpg'
import squash2Img from '/sports/squash2.jpg'
import GalleryHeading from "./EventGallery/GalleryHeading";

const Home = () => {
  const [isLoaded, setisLoaded] = useState(true)

  const data = [
    {
      title: "DAY 1",
      content: (
        <div>
          {/* <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-light italic mb-8">
            "Football is not just a game; it's an emotion that unites, inspires, and defines the spirit of never giving up." ⚽🔥
          </p> */}
          <div className="grid grid-cols-1 gap-4">
            <img
              src={footballImg}
              alt="startup template"
              width={500}
              height={500}
              className=" object-center rounded-lg object-cover h-40 md:h-54 lg:h-70 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

          </div>
        </div>
      ),
    },
    {
      title: "DAY 2",
      content: (
        <div>
          {/* <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-1 gap-4">
            <img
              src={cricket1Img}
              alt="startup template"
              width={500}
              height={500}
              className="object-center rounded-lg object-cover h-40 md:h-54 lg:h-70  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "DAY 3",
      content: (
        <div>
          {/* <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-1 gap-4">
            <img
              src={squash1Img}
              alt="startup template"
              width={500}
              height={500}
              className="object-center rounded-lg object-cover h-40 md:h-54 lg:h-70 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },

  ];

  return (
    <>
      {!isLoaded && <Loader />}
      <div id="homePage" className={`overflow-x-hidden relative ${isLoaded ? "" : "hidden"} `}>
        <div className=" fixed top-0 left-0 w-screen h-screen z-0 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <Navbar />
        <AutoSlidingCarousel />
        {/* <HeroSection setisLoaded={setisLoaded} /> */}
        <GalleryHeading />
        <section id='Events' className=" ">
          <div className="w-full">
            <Timeline data={data} />
          </div>
        </section>
        {/* <EventsCarousel /> */}
        <MemorySection />
        <Sponsers />
        <Footer />
      </div>
    </>
  );
};

export default Home;
