import React from 'react'
import './Home.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Facebook from '../../img/facebook.png';
import Profile from '../../img/profile.png';


const Home = () => {
  return (

    <div className="home">
      <div className="h-left">
        <div className="h-name">
          
          <span>Hi I'm</span>
          <span>Aniket Kharga</span>
          <span>FrontEnd Developer experienced in developing creative React-Js App. <br />
          Excellent Experience in Digital Marketing like (SEO,Social Media Marketing, Content Writing, Image SEO, Video SEO)
          </span>

        </div>
        <div>
        <button className="button h-button">HIRE ME</button>
        <button className="button hd-button">DOWNLOAD CV</button>
        </div>

        <div className="h-icon">
          <a href="https://github.com/kharga91">
          <img src={Github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/aniket-kharga-594280229/">
          <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/Aniket7kharga/">
          <img src={Facebook} alt="Facebook" />
          </a>
          

        </div>
        
      </div>

      <div className="h-right">
        <img src={Profile} alt="" />
        
      </div>
      
    </div>
  )
}

export default Home

