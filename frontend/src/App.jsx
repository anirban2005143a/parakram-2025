import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/homepage/Home.jsx'
import Team from './pages/team/team.jsx'
import Event from './pages/events/Event.jsx'
import Merchpage from './pages/Merchandise/Merchpage.jsx'
import Accompage from './pages/Accomodation/Accompage.jsx'

import bgImg from '/sports/bgimg.jpeg'
const App = () => {
  return (
    <>
      <div className=' fixed w-screen h-screen top-0 bg-[#00000099] bg-blend-darken  bg-no-repeat bg-cover bg-center ' style={{ backgroundImage: `url(${bgImg})` }}>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/events' element={<Event />} />
          <Route path='/Merchandise' element={<Merchpage />} />
          <Route path='/Accomodation' element={<Accompage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App