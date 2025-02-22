import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/homepage/Home'
import Team from './pages/team/team'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App