import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className="popular">
      <h1 className="text-center my-4">POPULAR IN SWEET</h1>
      <hr />
      <div className="row popular-item">
        {data_product.length > 0 ? (
          data_product.map((item, i) => (
            <div className="col-lg-3 col-md-5 col-sm-11  " key={i}>
            <Item
              key={item.id} // Use unique id as key
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
            </div>
          ))
        ) : (
          <p className="text-center">No products available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Popular;
