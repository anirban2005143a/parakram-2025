import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import React from "react";
import Accompage from "./Accompage.jsx";

function Accomodationpage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="mb-20 h-5 text-white">{/* feff */}</div>

      <div className="flex-grow">
        <Accompage />
      </div>
      <div className="mb-10 h-5 text-white">{/* feff */}</div>

      <Footer />
    </div>
  );
}

export default Accomodationpage;
