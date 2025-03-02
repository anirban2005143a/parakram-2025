import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className=" bg-gradient-to-b from-[#272e374d] to-[#00000079] backdrop-blur-sm text-white py-12 px-3 md:px-8 m-3 rounded-2xl relative z-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">PARAKRAM '25</h2>
          <p className="text-gray-400 mt-2">
            <p> EVOLVE. CONQUER. REPEAT </p>
            EAST INDIA'S LARGEST SPORTS FESTIVAL, IIT (ISM), DHANBAD
          </p>
          <div className="flex flex-wrap justify-center md:justify-start mt-4 space-x-3">
            <a href="https://drive.google.com/file/d/1CpHGoGXqassZXuHrEPl2Le0GAkxlqfLH/view?usp=sharing"
              className="bg-[#D1C5A1] my-2 text-black px-4 py-2 justify-center md:text-base text-xs rounded-lg cursor-pointer flex items-center text-center">
              <FaDownload /> Events Brochure
            </a>
            <a href="https://drive.google.com/file/d/13uWFyEYI6jw96XwfNwziW6NlrTzFaygj/view?usp=sharing"
              className="bg-[#D1C5A1] my-2 text-black px-4 py-2  justify-center md:text-base text-xs rounded-lg flex items-center">
              <FaDownload /> Rulebook
            </a>
            <button className="bg-[#D1C5A1] my-2 text-black px-4 py-2  justify-center md:text-base text-xs rounded-lg flex items-center">
              <FaDownload /> NOC'24
            </button>
          </div>
        </div>

        {/* Middle Section - Contact */}
        <div className="text-center md:text-left">
          <div className="w-fit mx-auto">
            <h2 className="text-lg font-semibold">For any queries:</h2>
            <p className="text-[#D1A001] mt-2">parakram@iitism.ac.in</p>
            <p className="text-gray-400 mt-1 hover:underline hover:underline-offset-4">9508823691</p>
            <p className="text-gray-400 mt-1 hover:underline hover:underline-offset-4">8125961154 <span className=" text-sm font-extralight ">(For registration issue)</span> </p>
            <p className="text-gray-400 mt-1">
              Indian Institute of Technology (ISM), Dhanbad - 826004, Jharkhand, India
            </p>
          </div>
        </div>

        {/* Right Section - Navigation */}
        <div className="text-center md:text-left">
          <div className=" w-fit mx-auto">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="text-gray-400 mt-2 space-y-1">
              <Link className="block" to="/">Home</Link>
              <Link className="block" to="/events">Events</Link>
              <Link className="block" to="/Merchandise" >Merchandise</Link>
              <Link className="block" to="/Sponsors">Sponsors</Link>
              <Link className="block" to="/Accomodation">Accommodation</Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-8 flex justify-center space-x-6 text-[#D1C5A1]">
        <a href="https://www.facebook.com/share/15srDGaXgX/"
          target="_blank"
          className="text-2xl"><FaFacebook /></a> {/* Facebook Icon */}
        <a
          href="https://www.instagram.com/parakram.iitism?igsh=MXgwdTNtMTBrOTZ4Mg=="
          target="_blank"
          className="text-2xl"><FaInstagram /></a> {/* Instagram Icon */}
      </div>
    </footer>
  );
};

export default Footer;
