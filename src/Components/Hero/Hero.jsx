import React from 'react'
import './Hero.css'
import b11 from '../Assets/b11.jpg'
import b12 from '../Assets/b12.jpg'

const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <div className='hero-left'>
            <h2>NEW SWEETS ONLY</h2>
        <div>
        <div className='hand-hand-icon'>
            <p>new</p>
            <img src={b12} alt=""/>
        </div>
        <p>sweet</p>
        <p>product</p>
        </div>
<div className="hero-latest-btn">
    <div>Latest collect</div>
    <img src={b11} alt=''/>

</div>
        </div>

        <div className='hero-right'>
        <img src={b11} alt=''/>
        </div>
        
      </div>
    </div>
    
  )
}

export default Hero
