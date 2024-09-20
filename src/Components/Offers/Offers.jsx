import React from 'react';
import './Offers.css';
import bg from '../Assets/bg.jpg';

const Offers = () => {
  return (
    <div className="offers d-flex align-items-center" style={{ height: '60vh', marginBottom: '150px', background: 'linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)' }}>
      <div className="offers-left col-lg-6 p-5">
        <h1 className="text-dark">Exclusive</h1>
        <h1 className="text-dark">Offers for you</h1>
        <p className="text-dark" style={{ fontSize: '22px', fontWeight: '600' }}>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="btn btn-danger" style={{ width: '282px', height: '70px', borderRadius: '35px', marginTop: '30px' }}>
          Check Now
        </button>
      </div>
      <div className='offers-right col-lg-6 d-flex justify-content-end align-items-center p-5'>
        <img className='offerbg img-fluid' src={bg} alt="" style={{ borderRadius: '20px', height: '400px', width: '400px' }} />
      </div>
    </div>
  );
}

export default Offers;

// import React from 'react'
// import './Offers.css'
// import bg from '../Assets/bg.jpg'
// const Offers = () => {
//   return (
//     <div className='offers'>
//       <div className="offers-left">
//         <h1>Exclusive</h1>
//         <h1>Offers for you</h1>
//         <p>ONLY ON BEST SELLERS PRODUCTS </p>
//         <button>Check Now</button>
//       </div>
//       <div className='Offers-right'>
//         <img className='offerbg' src={bg} alt=""/>
//       </div>
//     </div>
//   )
// }

// export default Offers
