import React from 'react';
import './Hero.css';
import b4 from '../Assets/b4.jpg';
import b12 from '../Assets/b12.jpg';
import arrow from '../Assets/arrow.png';

const Hero = () => {
  return (
    <div className="hero d-flex align-items-center" style={{ height: '100vh' }}>
      <div className="hero-left col-lg-6 p-5">
        <h2 className="text-dark">NEW SWEETS ONLY</h2>
        <div>
          <div className="hand-hand-icon d-flex align-items-center">
            <p>new</p>
            <img className='b12' src={b12} alt="" />
          </div>
          <p className="fs-1 fw-bold text-dark">sweet</p>
          <p className="fs-1 fw-bold text-dark">product</p>
        </div>
        <div className="hero-latest-btn d-flex align-items-center justify-content-center">
          <div>Latest collect</div>
          <img className='arrow' src={arrow} alt='' />
        </div>
      </div>
      <div className="hero-right col-lg-6 d-flex justify-content-center align-items-center">
        <img className='b4 img-fluid' src={b4} alt='' />
      </div>
    </div>
  );
};

export default Hero;
