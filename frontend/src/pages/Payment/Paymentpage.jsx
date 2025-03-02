import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import AccommodationCard from "./Paymentcard.jsx";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
      <div className="flex-grow flex items-center justify-center relative py-[120px] md:px-5 px-2">
        <AccommodationCard
          title={"Payment Now"}
          description="Scan Qr code and submit the following datials"
          price={""}
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