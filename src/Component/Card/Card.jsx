import React from 'react'
import './Card.css'

const Card = ({heading, details}) => {
  return (
    <div className="card">
      
      <span>{heading}</span>
      <span>{details}</span>
      <button className="c-button">LEARNMORE</button>

    </div>
  )
}

export default Card
