import React from 'react'
import './Offers.css'
import bg from '../Assets/bg.jpg'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS </p>
        <button>Check Now</button>
      </div>
      <div className='Offers-right'>
        <img src={bg} alt=""/>
      </div>
    </div>
  )
}

export default Offers
