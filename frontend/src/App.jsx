
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/homepage/Home.jsx'
import Merchpage from './pages/Merchandise/Merchpage.jsx'
import bgImg from '/bgimg.jpeg'
import Eventpage from './pages/events/Eventpage.jsx'
import AboutUsPage from './pages/About/About.jsx'
import Accomodationpage from './pages/Accomodation/Accomodationpage.jsx'
import Sponsors from './pages/Sponsors/Sponsors.jsx'
import Login from './pages/auth/Login.jsx'
import RegisterPage from './pages/Register/RegisterPage.jsx'
import Teampage from './pages/team/teampage.jsx'
import Payment from '../src/pages/Payment/Paymentpage.jsx'
const App = () => {
  return (
    <>
      <div
        className=" fixed w-screen h-screen top-0 bg-[#000000be] bg-blend-darken  bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUsPage />} />
          <Route path='/team' element={<Teampage />} />
          <Route path='/events' element={<Eventpage />} />
          <Route path='/Merchandise' element={<Merchpage />} />
          <Route path='/Accomodation' element={<Accomodationpage />} />
          <Route path='/Sponsors' element={<Sponsors />} />
          <Route path='/Admin/login' element={<Login />} />
          <Route path='/event/registration' element={<RegisterPage />} />
          <Route path='/event/payment' element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
