import React, { useRef } from 'react';
import './RelatedProducts.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';


const RelatedProducts = () => {
  const productsRef = useRef(null);

  // Function to scroll left
  const handlePrevClick = () => {
    const scrollDistance = window.innerWidth < 768 ? 150 : 200; // Adjust scroll distance based on screen size
    productsRef.current.scrollBy({
      left: -scrollDistance,
      behavior: 'smooth',
    });
  };

  // Function to scroll right
  const handleNextClick = () => {
    const scrollDistance = window.innerWidth < 768 ? 150 : 200; // Adjust scroll distance based on screen size
    productsRef.current.scrollBy({
      left: scrollDistance,
      behavior: 'smooth',
    });
  };

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      
      <div className='relatedproducts-buttons d-flex justify-content-between mb-2'>
        <button
          aria-label="click here to move previous"
          className="btn "
          onClick={handlePrevClick}
        >
         ⬅️Preview
        </button>
        <button
          aria-label="click here to move next"
          className="btn "
          onClick={handleNextClick}
        >
        Next➡️
        </button>
      </div>
      <hr />
      <div className='relatedproducts-item d-flex overflow-auto' ref={productsRef}>
        {data_product.map((item, i) => (
          <div className="p-2" key={i}>
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;


// import React, { useRef } from 'react';
// import './RelatedProducts.css';
// import data_product from '../Assets/data';
// import Item from '../Item/Item';

// const RelatedProducts = () => {
//   const productsRef = useRef(null);

//   // Function to scroll left
//   const handlePrevClick = () => {
//     productsRef.current.scrollBy({
//       left: -200, // Adjust scroll distance
//       behavior: 'smooth',
//     });
//   };

//   // Function to scroll right
//   const handleNextClick = () => {
//     productsRef.current.scrollBy({
//       left: 200, // Adjust scroll distance
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <div className='relatedproducts'>
//       <h1>Related Products</h1>
      
//       <div className='relatedproducts-buttons'>
//         <button
//           aria-label="click here to move previous"
//           className="sc-epqpcT iqCthW"
//           onClick={handlePrevClick}
//         >
//          &#9664;Preview
//         </button>
//         <button
//           aria-label="click here to move next"
//           className="sc-epqpcT iqCthW"
//           onClick={handleNextClick}
//         >
//         Next&#9654;
//         </button>
        
//       </div>
//       <hr />
//       <div className='relatedproducts-item' ref={productsRef}>
//         {data_product.map((item, i) => (
//           <Item
//             key={i}
//             id={item.id}
//             name={item.name}
//             image={item.image}
//             new_price={item.new_price}
//             old_price={item.old_price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RelatedProducts;

