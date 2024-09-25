import React from 'react';
import './ProductDisplay.css';
import b13 from '../Assets/b13.jpg'

const ProductDisplay = (props) => {
    const { product } = props;  // Destructure Product from props

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                <img  className='productdisplay-main-img' src={product.image} alt="" />
           
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={b13} alt=""/>
                    <img src={b13} alt=""/>
                    <img src={b13} alt=""/>
                    <img src={b13} alt=""/>
                    <img src={b13} alt=""/>
                    <p>133</p>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                Sweet Notes is your personalized space to add thoughts, reminders, or messages for any product you love. Whether you’re buying a gift for someone special or simply jotting down your favorite moments with a product, Sweet Notes lets you capture the essence of every sweet purchase.Create Memorable Notes: Leave special messages on the items you adore. From reminders about favorite flavors to heartfelt gift messages, make every purchase personal. 
                </div>
                <div className="proudctdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <button>ADD TO CART</button>
            </div>
        </div>
    );
}

export default ProductDisplay;
