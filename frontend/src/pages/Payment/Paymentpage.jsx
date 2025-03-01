import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import AccommodationCard from "./Paymentcard.jsx";
import { useLocation } from "react-router-dom";

function RegisterPage() {
  const location = useLocation();
  const { sending_data } = location.state || { sending_data: [] };
  console.log(sending_data);
  const features = [
    "Access to All Features",
    "20% discount on backorders",
    "Domain name Appraisal",
    "10 Social Profiles",
  ];
  return (
    <>
      <Navbar />
      <div className="mb-36 h-5 text-white">{/* feff */}</div>
      <div className="flex-grow flex items-center justify-center relative z-10 md:p-5 p-2">
        <AccommodationCard
          title={"Fast Payment"}
          description="Scan Qr code and submigt the datials folloeing   "
          price={"mmmm"}
          features={features}
          discount="No hidden fees"
          buttonText="Book Now"
          sending_data={sending_data}
        />
      </div>
      <Footer />
    </>
  );
}

export default RegisterPage;