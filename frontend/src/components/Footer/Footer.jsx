import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" bg-gradient-to-b from-[#272e374d] to-[#00000079] backdrop-blur-sm text-white py-12 px-3 md:px-8 m-3 rounded-2xl relative z-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">PARAKRAM '24</h2>
          <p className="text-gray-400 mt-2">
            Defy odds, define legacy EAST INDIA'S LARGEST SPORTS FESTIVAL, IIT (ISM), DHANBAD
          </p>
          <div className="flex justify-center md:justify-start mt-4 space-x-3">
            <a href="https://drive.google.com/file/d/1CpHGoGXqassZXuHrEPl2Le0GAkxlqfLH/view?usp=sharing" className="bg-[#D1C5A1] text-black px-2 py-2 w-[150px] justify-center md:text-base text-sm rounded-lg cursor-pointer flex items-center text-center">
              ⭳ Events Brochure
            </a>
            <a href="https://drive.google.com/file/d/13uWFyEYI6jw96XwfNwziW6NlrTzFaygj/view?usp=sharing" className="bg-[#D1C5A1] text-black px-2 py-2 w-[150px] justify-center md:text-base text-sm rounded-lg flex items-center">
              ⭳ Rulebook
            </a>
            <button className="bg-[#D1C5A1] text-black px-2 py-2 w-[150px] justify-center md:text-base text-sm rounded-lg flex items-center">
              ⭳ NOC'24
            </button>
          </div>
        </div>

        {/* Middle Section - Contact */}
        <div className="text-center md:text-left">
          <div className="w-fit mx-auto">
            <h2 className="text-lg font-semibold">For any queries:</h2>
            <p className="text-[#D1A001] mt-2">parakram@iitism.ac.in</p>
            <p className="text-gray-400 mt-1">9963981308</p>
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
        <a href="#" className="text-2xl">&#xf09a;</a> {/* Facebook Icon */}
        <a href="#" className="text-2xl">&#xf16d;</a> {/* Instagram Icon */}
      </div>
    </footer>
  );
};

export default Footer;
