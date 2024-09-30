import React from 'react';
import './ProductDisplay.css';
import star_dull from '../Assets/star_dull.png';
import star_icon from '../Assets/star_icon.png';

const ProductDisplay = ({ product }) => {
    return (
        <div className='productdisplay row' style={{ margin: '0 120px' }}>
            <div className="productdisplay-left col-md-6 d-flex flex-column gap-3">
                <div className="product-image">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={product.image} className="d-block w-100" alt="Slide 1" />
                            </div>
                            <div className="carousel-item">
                                <img src={product.b1} className="d-block w-100" alt="Slide 2" />
                            </div>
                            <div className="carousel-item">
                                <img src={product.background} className="d-block w-100" alt="Slide 3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="productdisplay-right col-md-6 d-flex flex-column">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars d-flex align-items-center mt-2">
                    <img className="star" src={star_icon} alt="star" />
                    <img className="star" src={star_icon} alt="star" />
                    <img className="star" src={star_icon} alt="star" />
                    <img className="star" src={star_icon} alt="star" />
                    <img className="star" src={star_dull} alt="dull star" />
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

                <p className='productdisplay-right-category mt-2'><span>Category :</span> Cake, chocolate, Sweet & Dessert</p>
                <p className='productdisplay-right-category'><span>Tags :</span> Cake, chocolate, Sweet & Dessert</p>
            </div>
        </div>
    );
}

export default ProductDisplay;

