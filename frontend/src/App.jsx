import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/homepage/Home.jsx'
import Team from './pages/team/team.jsx'
import Event from './pages/events/Event.jsx'
import Merchpage from './pages/Merchandise/Merchpage.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team/>} />
        <Route path='/events' element={<Event/>} />
        <Route path='/Merchandise' element={<Merchpage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App