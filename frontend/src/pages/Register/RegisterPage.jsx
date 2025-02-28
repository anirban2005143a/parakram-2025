import React from "react";
import RegistrationForm from "./RegisterForm.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function RegisterPage() {
  return (
    <>
      <Navbar />
      <div className="mb-36 h-5 text-white">{/* feff */}</div>
      <div className="flex-grow flex items-center justify-center relative z-10">
        <RegistrationForm />
      </div>
      <Footer />
    </>
  );
}

export default RegisterPage;