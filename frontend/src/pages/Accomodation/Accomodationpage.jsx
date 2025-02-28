import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import React from "react";
import Accompage from "./Accompage.jsx";
import { TextGenerateEffect } from "../../components/aceternity/Textgenerate.jsx";

function Accomodationpage() {
  return (
    <>

        <Navbar />
      <div className="flex flex-col min-h-screen pt-[150px] ">
        <div className="text-center md:px-6 px-2">
          <TextGenerateEffect words={"Stay Safe , Stay Ismite"} />
        </div>
        <div className="mb-10 h-5 text-white">{/* feff */}</div>

        <div className="flex-grow">
          <Accompage />
        </div>
        <div className="mb-10 h-5 text-white">{/* feff */}</div>

        <Footer />
      </div>
    </>
  );
}

export default Accomodationpage;
