import React from 'react'
import './Navbar.css'
import Logo from '../../img/logo.png.png'
const navbar = () => {
  return (
   <div className="n-wrapper">
    <div className="n-left">
    <div className="n-logo">
        <img className='logo' src={Logo} alt="" />
        </div>
    <span>Toggle</span>
      
    </div>
    <div className="n-right">
      <div className="n-list">
        <ul style={{listStyleType:'none'}}>
          <li>Home</li>
          <li>About</li>
          <li>Education</li>
          <li>Experience</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <button className="button n-button">SIGN UP</button>
    </div>
   </div>
  )
}

export default navbar

