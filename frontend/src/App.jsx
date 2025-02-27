import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/homepage/Home.jsx'
import Team from './pages/team/team.jsx'
import Merchpage from './pages/Merchandise/Merchpage.jsx'
import Accompage from './pages/Accomodation/Accompage.jsx'

import bgImg from '/bgimg.jpeg'
import Eventpage from './pages/events/Eventpage.jsx'
import AboutUsPage from './pages/About/About.jsx'
const App = () => {
  return (
    <>
      <div className=' fixed w-screen h-screen top-0 bg-[#000000be] bg-blend-darken  bg-no-repeat bg-cover bg-center ' style={{ backgroundImage: `url(${bgImg})` }}>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUsPage />} />
          <Route path='/team' element={<Team />} />
          <Route path='/events' element={<Eventpage />} />
          <Route path='/Merchandise' element={<Merchpage />} />
          <Route path='/Accomodation' element={<Accompage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App