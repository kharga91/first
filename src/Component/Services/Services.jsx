import React from 'react'
import './Services.css'
import WebDesign from '../../img/webdesign.png'

import DigitalMarketing from '../../img/digitalmarketing.png'
import SEO from '../../img/seo.png'
import Social from '../../img/social.png'

const Services = () => {
  return (
    <div className="s-body">
      <div className="s-container">
        <h1>Our Services</h1>
        <div className="s-row">
          <div className="s-services">
            <img src={WebDesign} alt="" />
            <h2>Web Design</h2>
            <p>Web design involves creating visually appealing and user-friendly interfaces for websites, combining elements such as layout, color, and typography to enhance the overall user experience.</p>
          </div>
          
          <div className="s-services">
            <img src={DigitalMarketing} alt="" />
            <h2>Digital Marketing</h2>
            <p>Digital marketing utilizes online channels such as social media, search engines, and email to promote products or services, enabling businesses to reach a global audience and target specific demographics. Its dynamic nature allows for real-time analytics, optimizing strategies for improved engagement and conversion rates.</p>
          </div>
          <div className="s-services">
            <img src={SEO} alt="" />
            <h2>SEO</h2>
            <p>
SEO, or Search Engine Optimization, is the practice of optimizing online content to enhance its visibility on search engine results pages, ultimately driving organic traffic to a website. It involves strategic use of keywords, quality content creation, and technical optimizations to improve a site's ranking and relevance in search engine algorithms.</p>
          </div>
          <div className="s-services">
            <img src={Social} alt="" />
            <h2>Social Media Marketing</h2>
            <p>Social Media Marketing leverages platforms like Facebook, Instagram, and Twitter to promote products or services, engaging a vast audience through targeted content and advertisements. It fosters brand visibility, customer interaction, and facilitates the creation of a dynamic online presence for businesses.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services
