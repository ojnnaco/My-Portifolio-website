import React from 'react'
import './Toggle.css'
import moon from '../../images/moon.png'
import sun from '../../images/sun.png'

function Toggle() {
  return (
    <div className='toggle-container'>
    <img src={sun} alt="" className="t-icon" />
    <img src={moon} alt="" className="t-icon" />
    <div className="t-button"></div>
    </div>
  )
}

export default Toggle