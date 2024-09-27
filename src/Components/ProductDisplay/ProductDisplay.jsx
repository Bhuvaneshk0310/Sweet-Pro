import React from 'react';
import './ProductDisplay.css';
import star_dull from '../Assets/star_dull.png';
import star_icon from '../Assets/star_icon.png';

const ProductDisplay = (props) => {
    const { product } = props;  // Destructure Product from props

    return (
        <div className='productdisplay row' style={{ margin: '0 170px' }}>
            <div className="productdisplay-left col-md-6 d-flex flex-column gap-3">
                <div className="productdisplay-img-list d-flex flex-column gap-2">
                    <img src={product.image} alt="" className="img-fluid" />
                    <img src={product.image} alt="" className="img-fluid" />
                    <img src={product.image} alt="" className="img-fluid" />
                    <img src={product.image} alt="" className="img-fluid" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img img-fluid' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right col-md-6 d-flex flex-column">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars d-flex align-items-center mt-2">
                    <img className="star" src={star_icon} alt="" />
                    <img className="star" src={star_icon} alt="" />
                    <img className="star" src={star_icon} alt="" />
                    <img className="star" src={star_icon} alt="" />
                    <img className="star" src={star_dull} alt="" />
                    <p className="ms-2 mb-0">(133)</p>

                </div>
                <div className='productdisplay-right-prices d-flex my-4 gap-4'>
                    <div className="productdisplay-right-price-old text-muted text-decoration-line-through">${product.old_price}</div>
                    <div className="productdisplay-right-price-new text-danger">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Sweet Notes is your personalized space to add thoughts, reminders, or messages for any product you love.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Quality</h1>
                    <div className="d-flex my-3 gap-2">
                        {["100g", "150g", "250g", "500g", "1kg"].map(size => (
                            <div key={size} className="p-3 bg-light border border-secondary rounded cursor-pointer">{size}</div>
                        ))}
                    </div>
                </div>
                <button className="btn btn-danger mt-4" style={{ width: '200px', fontSize: '17px', fontWeight: '600' }}>ADD TO CART</button>
                <p className='productdisplay-right-category mt-2'><span>Category :</span> Women, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags :</span> Women, T-Shirt, Crop Top</p>
            </div>
        </div>
    );
}

export default ProductDisplay;

// import React from 'react';
// import './ProductDisplay.css';
// import star_dull from '../Assets/star_dull.png'
// import star_icon from '../Assets/star_icon.png'
// const ProductDisplay = (props) => {
//     const { product } = props;  // Destructure Product from props

//     return (
//         <div className='productdisplay'>
//             <div className="productdisplay-left">
//                 <div className="productdisplay-img-list">
//                     <img src={product.image} alt="" />
//                     <img src={product.image} alt="" />
//                     <img src={product.image} alt="" />
//                     <img src={product.image} alt="" />
//                 </div>
//                 <div className="productdisplay-img">
//                 <img  className='productdisplay-main-img' src={product.image} alt="" />
           
//                 </div>
//             </div>
//             <div className="productdisplay-right">
//                 <h1>{product.name}</h1>
//                 <div className="productdisplay-right-stars">
//                     <img className="star"src={star_icon} alt=""/>
//                     <img className="star" src={star_icon} alt=""/>
//                     <img className="star" src={star_icon} alt=""/>
//                     <img className="star" src={star_icon} alt=""/>
//                     <img className="star" src={star_dull} alt=""/>
//                     <p>(133)</p>
//                 </div>
//                 <div className='productdisplay-right-prices'>
//                     <div className="productdisplay-right-price-old">${product.old_price}</div>
//                 <div className="productdisplay-right-price-new">${product.new_price}</div>
//                 </div>
//                 <div className="productdisplay-right-description">
//                 Sweet Notes is your personalized space to add thoughts, reminders, or messages for any product you love. 
//                 </div>
//                 <div className="proudctdisplay-right-size">
//                     <h1>Select Size</h1>
//                     <div className="productdisplay-right-size">
//                         <div>100g</div>
//                         <div>150g</div>
//                         <div>250g</div>
//                         <div>500g</div>
//                         <div>1kg</div>
//                     </div>
//                 </div>
//                 <button>ADD TO CART</button>
//             <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>
//             <p className='productdisplay-right-category'><span>Tags :</span>Women , T-Shirt, Crop Top</p> 
//             </div>
//         </div>
//     );
// }

// export default ProductDisplay;
