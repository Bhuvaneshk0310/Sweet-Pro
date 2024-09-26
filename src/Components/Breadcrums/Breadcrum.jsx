import React from 'react'
import arrow from "../Assets/arrow.png"
const Breadcrum = (props) => {
    const {product }=props;
  return (
    <div className='breadcrum'>
      Home <img src={arrow} all=''/> Shop <img src={arrow} all=''/> {product.category} <img src={arrow} all=''/> {product.name}  <img src={arrow} all=''/>
    </div>
  )
}

export default Breadcrum
