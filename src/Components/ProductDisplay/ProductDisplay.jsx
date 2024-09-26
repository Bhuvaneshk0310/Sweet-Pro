import React from 'react';
import './ProductDisplay.css';
import star_dull from '../Assets/star_dull.png'
import star_icon from '../Assets/star_icon.png'
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
                <div className="productdisplay-right-stars">
                    <img className="star"src={star_icon} alt=""/>
                    <img className="star" src={star_icon} alt=""/>
                    <img className="star" src={star_icon} alt=""/>
                    <img className="star" src={star_icon} alt=""/>
                    <img className="star" src={star_dull} alt=""/>
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
                        <div>50g</div>
                        <div>100g</div>
                        <div>150g</div>
                        <div>500g</div>
                        <div>1kg</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Women , T-Shirt, Crop Top</p> 
            </div>
        </div>
    );
}

export default ProductDisplay;
