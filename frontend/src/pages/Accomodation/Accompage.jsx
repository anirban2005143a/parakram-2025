import React from "react";
import Card from "./Card.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import FooterT from "../../components/Footer/Footer.jsx";
import DecryptedText from "../../components/reactBits/DecodeX.jsx";

function Accompage() {
  let Name = [];
  let url = ["111", "222", "3333", "3333", "333", "333"];
  // complete the url of but this pack

  Name[0] =
    "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 1949/- (Non-Refundable)";
  Name[1] =
    "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 1549/- (Non-Refundable)";
  Name[2] =
    "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 1149/- (Non-Refundable)";
  Name[3] =
    "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 1299/- (Non-Refundable)";
  Name[4] =
    "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 899/- (Non-Refundable)";
  Name[5] =
    "For those who want to stay in the IIT-ISM campus A registration fee of Rs. 399/- (Non-Refundable)";
  return (
    <div id="accomodation" className="overflow-x-hidden relative">
      <div className="fixed z-0 top-0 left-0 w-screen h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Navbar />

      <div className=" relative z-10 pt-[80px]">
        <div className="flex justify-center text-amber-100 sm:text-7xl xl:text-5xl  py-5">
          <DecryptedText
            text="Where Would You Like to Stay?"
            speed={100}
            maxIterations={15}
            characters="!@#$%^&*()_+{}|"
            className="revealed macondo-swash-caps-regular"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          {Array.from({ length: 6 }, (_, i) => (
            <Card key={i} i={i + 1} data={Name[i]} url={url[i]} />
          ))}
        </div>
      </div>
      <FooterT />
    </div>
  );
}

export default Accompage;
