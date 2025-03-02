import React from "react";
import RegistrationForm from "./RegisterForm.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function RegisterPage() {
  return (
    <>
      <Navbar />
      <div className="flex-grow flex items-center py-[120px] justify-center relative ">
        <RegistrationForm />
      </div>
      <Footer />
    </>
  );
}

export default RegisterPage;