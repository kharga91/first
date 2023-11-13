import React from 'react'
import './About.css'
import Card from '../Card/Card'
import Html from '../../img/html.png'
import Css from '../../img/css.png'
import Javascript from '../../img/javascript.png'
import Areact from '../../img/react.png'
import Seo from '../../img/seo.png'
const About = () => {
  return (
    <div className="about">
<span className='a'>About Me</span>
      <div className="a-left">
        
        <div className="a-about">
          <div className="cards">
            <div style={{ top: '2rem', left: '40rem' }}>
              <Card
                heading={'FrontEnd Developer'}
                details={'Greetings! 👋 As a dedicated frontend developer, I am Aniket Kharga and I work remotely from Kathmandu. I have a strong passion for designing intuitive and eye-catching user interfaces, and I specialize in developing cutting-edge, responsive web apps.'}
              />
            </div>
            <div style={{ top: '14rem', left: '60rem' }} >
              <Card
                heading={'Digital Marketing'}
                details={'Strategically driving online success through data-driven campaigns and innovative digital marketing solutions, I specialize in optimizing brand visibility and engagement to achieve measurable results.'}
              />
            </div>
            <div style={{ top: '32rem', left: '40rem' }}>
              <Card
                heading={'Skills'}
                details={'HTML CSS JavaScript React Tailwind SEO Google Analytics Technical SEO Local SEO Content Marketing      Pay Per Cick       Social Media Marketing      Influencer Marketing     Email Marketing Affiliate Marketing '}
              />
            </div>
          </div>




        </div>
      </div>
      {/* This is the righ side */}
      <div className="a-right">
        <div className="a-maincircle">
          <div className="semicircle a-semicircle">
            <img src={Html} alt="" />
          </div>
          <div className="semicircle b-semicircle">
            <img src={Css} alt="" />
          </div>
          <div className="semicircle c-semicircle">
            <img src={Javascript} alt="" />
          </div>
          <div className="semicircle d-semicircle">
            <img src={Areact} alt="" />
          </div>
          <div className="semicircle e-semicircle">
            <img src={Seo} alt="" />
          </div>
        </div>
      </div>
    </div>


  )
}

export default About
