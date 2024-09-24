import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown from '../Components/Assets/dropdown.png';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    return (
        <div className='Shop-category'>
            <img src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of {all_product.length} products
                </p>
                <div className='shopcategory-sort'>
                    Sort by <img src={dropdown} alt="" />
                </div>
            </div>
            
            <div className="product-list">
                {all_product.map((product, index) => (
                    <div key={index} className="product-item">
                        <img src={product.image} alt={product.name} />
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopCategory;
