import React from 'react';
import './NewCollections.css';
import new_collections from '../Assets/new_collections'; // Make sure this imports an array
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className='new-collections text-center mb-5'>
      <h1 className="text-dark">New Dish</h1>
      <hr className="mx-auto" style={{ width: '200px', height: '6px', borderRadius: '10px', background: '#252525' }} />
      <div className="row g-3 mt-4">
        {new_collections.map((item, i) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
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
}

export default NewCollections;


// import React from 'react'
// import './NewCollections.css'
// import new_collections from '../Assets/new_collections'
// import Item from '../Item/Item'

// const NewCollections = () => {
//   return (
//     <div className='new-collections'>
//       <h1>New Dish</h1>
//       <hr/>
//       <div className='collections'>
//       {new_collections.map((item, i) => {
//         return (
//           <Item 
//             key={i} 
//             id={item.id}  
//             name={item.name} 
//             image={item.image} 
//             new_price={item.new_price} 
//             old_price={item.old_price}
//           />
//         );
//       })}
//       </div>
//     </div>
//   )
// }

// export default NewCollections
