import React from "react";
import Carousel from "../Merchandise/Merch.jsx";
import Navbar from "../../components/navbar/Navbar";
import FooterT from "../../components/Footer/Footer.jsx";
import { Link } from "react-router-dom";
import BlurText from "../../components/reactBits/BlurText.jsx";
const Merchpage = () => {
 
  return (
    <>
      <div id="homePage" className=" overflow-x-hidden relative">
        <div className=" fixed -z-10 top-0 left-0 w-screen h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <Navbar />
        <div className="mt-12 h-5 text-white">{/* feff */}</div>
        <div className="mt-12 h-5 text-white">{/* feff */}</div>
        <div className="flex justify-center">
          <BlurText
            text="Exclusive | Trendy | Premium | Limited"
            delay={180}
            animateBy="words"
            direction="top"
            className="lg:text-6xl md:text-4xl text-2xl mb-8 text-white macondo-swash-caps-regular"
          />
        </div>
        <Carousel />

        <div className="my-10 h-4 flex justify-center">
          <Link to="/events">
            <button
              className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
              style={{ border: "2px solid white" }}
            >
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                <div className="relative z-10 flex items-center space-x-3">
                  <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
                    {" "}
                    Buy Merchandise
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                  >
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                  </svg>
                </div>
              </span>
            </button>
          </Link>
        </div>

        <div className="mt-20 h-5 "></div>
        <FooterT />
      </div>
    </>
  );
};

export default Merchpage;
