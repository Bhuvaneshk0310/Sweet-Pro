import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <nav className="descriptionbox-navigator nav nav-tabs">
        <div className="nav-item">
          <a className="nav-link active" href="#">Description</a>
        </div>
        <div className="nav-item">
          <a className="nav-link" href="#">Reviews (122)</a>
        </div>
      </nav>
      <div className="descriptionbox-description">
        <p>
          Welcome to [Your Store Name], your one-stop destination for all your shopping needs! We offer a wide range of high-quality products, from the latest fashion trends to cutting-edge electronics and everyday essentials. Our carefully curated selection ensures that you find exactly what you're looking for, whether it's a stylish outfit, the perfect gift, or the latest gadget. Enjoy a seamless shopping experience with our user-friendly interface, secure payment options, and fast shipping. At [Your Store Name], customer satisfaction is our top priority, and we're committed to bringing you the best in quality and service. Start shopping today and discover the difference with [Your Store Name]!
        </p>
        <p>
          "I recently purchased from this site, and the entire experience was seamless. The product arrived quickly and was exactly as described—highly recommend!"
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;


// import React from 'react'
// import './DescriptionBox.css'
// const DescriptionBox = () => {
//   return (
//     <div className='descriptionbox'>
//       <div className="descriptionbox-navigator">
//         <div className="descriptionbox-nav-box">Description</div>
//         <div className="descriptionbox-nav-boxfade">Reviews (122)</div>
//       </div>
//       <div className="descriptionbox-description">
//         <p>
//         Welcome to [Your Store Name], your one-stop destination for all your shopping needs! We offer a wide range of high-quality products, from the latest fashion trends to cutting-edge electronics and everyday essentials. Our carefully curated selection ensures that you find exactly what you're looking for, whether it's a stylish outfit, the perfect gift, or the latest gadget. Enjoy a seamless shopping experience with our user-friendly interface, secure payment options, and fast shipping. At [Your Store Name], customer satisfaction is our top priority, and we're committed to bringing you the best in quality and service. Start shopping today and discover the difference with [Your Store Name]!
//         </p>
//         <p>
//         "I recently purchased from this site, and the entire experience was seamless. The product arrived quickly and was exactly as described—highly recommend!"
//         </p>
//       </div>

//     </div>
//   )
// }

// export default DescriptionBox
