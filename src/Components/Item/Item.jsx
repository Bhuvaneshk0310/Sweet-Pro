import React from 'react';
import './Item.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const Item = (props) => {
  return (
    <div className='col-md-10 mb-4 ms-4 ps-3'>
      <div className='item card'>
        <img className="item-img card-img-top" src={props.image} alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <div className='item-prices d-flex justify-content-between'>
            <div className='item-price-new'>
              ${props.new_price}
            </div>
            <div className='item-price-old'>
              ${props.old_price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
