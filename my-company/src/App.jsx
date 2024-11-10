import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />,
        <Route path='about' element={<About />} />,
        <Route path='contact' element={<Contact />} />,
        <Route path='services' element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
   
  )
}

export default App
