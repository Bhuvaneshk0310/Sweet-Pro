import React from 'react'
import './Hero.css'
import b4 from '../Assets/b4.jpg'
import b12 from '../Assets/b12.jpg'
import  arrow  from '../Assets/arrow.png'

const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <div className='hero-left'>
            <h2>NEW SWEETS ONLY</h2>
        <div>
        <div className='hand-hand-icon'>
            <p>new</p>
            <img className='b12' src={b12} alt=""/>
        </div>
        <p>sweet</p>
        <p>product</p>
        </div>
<div className="hero-latest-btn">
    <div>Latest collect</div>
    <img className='arrow'src={arrow} alt=''/>

</div>
        </div>

        <div className='hero-right'>
        <img className='b4' src={b4} alt=''/>
        </div>
        
      </div>
    </div>
    
  )
}

export default Hero
