import React from 'react'
import arrow1 from "../Assets/arrow1.png"
import './Breadcrum.css';
const Breadcrum = (props) => {
    const {product }=props;
  return (
    <div className='breadcrum'>
      Home <img className='breadimg' src={arrow1} all=''/> Shop <img className='breadimg' src={arrow1} all=''/> {product.category} <img className='breadimg' src={arrow1} all=''/> {product.name}  <img  className='breadimg'src={arrow1} all=''/>
    </div>
  )
}

export default Breadcrum
