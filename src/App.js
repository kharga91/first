import React from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Education from './Component/Education/Education'
import Services from './Component/Services/Services'



function App () {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Services/>
      
      
    </div>
  )
}

export default App
