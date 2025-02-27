import React from "react";

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
            <button className="bg-[#D1C5A1] text-black px-2 py-2 w-[150px] justify-center md:text-base text-sm rounded-lg flex items-center">
              ⭳ Events Brochure
            </button>
            <button className="bg-[#D1C5A1] text-black px-2 py-2 w-[150px] justify-center md:text-base text-sm rounded-lg flex items-center">
              ⭳ Rulebook
            </button>
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
              <li>Home</li>
              <li>Events</li>
              <li>Merchandise</li>
              <li>Sponsors</li>
              <li>Accommodation</li>
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
