<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/homepage/Home.jsx'
import Team from './pages/team/team.jsx'
import Merchpage from './pages/Merchandise/Merchpage.jsx'
import bgImg from '/bgimg.jpeg'
import Eventpage from './pages/events/Eventpage.jsx'
import AboutUsPage from './pages/About/About.jsx'
import Accomodationpage from './pages/Accomodation/Accomodationpage.jsx'
import Sponsors from './pages/Sponsors/Sponsors.jsx'
=======
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home.jsx";
import Teampage from "./pages/team/teampage.jsx";
import Merchpage from "./pages/Merchandise/Merchpage.jsx";
import bgImg from "/bgimg.jpeg";
import Eventpage from "./pages/events/Eventpage.jsx";
import AboutUsPage from "./pages/About/About.jsx";
import Accomodationpage from "./pages/Accomodation/Accomodationpage.jsx";
import RegisterPage from "./pages/Register/RegisterPage.jsx";
>>>>>>> 154c4c14270e8a77f458778128b0edb7898fa360
const App = () => {
  return (
    <>
      <div
        className=" fixed w-screen h-screen top-0 bg-[#000000be] bg-blend-darken  bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUsPage />} />
          <Route path='/team' element={<Team />} />
          <Route path='/events' element={<Eventpage />} />
          <Route path='/Merchandise' element={<Merchpage />} />
          <Route path='/Accomodation' element={<Accomodationpage />} />
          <Route path='/Sponsors' element={<Sponsors />} />
=======
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/team" element={<Teampage />} />
          <Route path="/events" element={<Eventpage />} />
          <Route path="/Merchandise" element={<Merchpage />} />
          <Route path="/Accomodation" element={<Accomodationpage />} />
          <Route path="/Registration" element={<RegisterPage />} />
>>>>>>> 154c4c14270e8a77f458778128b0edb7898fa360
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
