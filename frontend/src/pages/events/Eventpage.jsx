import Navbar from "../../components/navbar/Navbar.jsx";
import React from "react";
import Event from "./Event.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { TextGenerateEffect } from "../../components/aceternity/Textgenerate.jsx";

function Eventpage() {
  return (
    <div>
      <Navbar />
      <div className="mb-36 h-5 text-white">{/* feff */}</div>
      <div className="text-center">
        <TextGenerateEffect words={"Exciting Parakram Events"} />
      </div>
      <Event />
      <div className="mb-12 h-5 text-white">{/* feff */}</div>
      <Footer />
    </div>
  );
}

export default Eventpage;
