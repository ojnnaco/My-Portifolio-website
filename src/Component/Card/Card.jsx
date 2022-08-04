import React from 'react'
import './Card.css'

const Card = ({image, title, Details}) => {
  return (
    <div className='card'>
    <img src={image} alt="" />
    <span>{title}</span>
    <span>{Details}</span>
    <a href="https://github.com/ojnnaco" target="_blank" rel="noopener noreferrer">
      <button className='code-btn'>Source Code</button>
      </a>
    </div>
  )
}

export default Card