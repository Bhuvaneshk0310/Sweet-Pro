import React from 'react'
import './Hero.css'
import b6 from '../Assets/b6.jpg'
import b7 from '../Assets/b7.jpeg'

const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <div className='hero-left'>
            <h2>NEW SWEETS ONLY</h2>
        <div>
        <div className='hand-hand-icon'>
            <p>new</p>
            <img src={b6} alt=""/>
        </div>
        <p>sweet</p>
        <p>product</p>
        </div>
<div className="hero-latest-btn">
    <div>Latest collect</div>
    <img src={b6} alt=''/>

</div>
        </div>

        <div className='hero-right'>
        <img src={b7} alt=''/>
        </div>
        
      </div>
    </div>
    
  )
}

export default Hero
