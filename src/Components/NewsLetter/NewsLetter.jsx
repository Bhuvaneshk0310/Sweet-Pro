import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="newsletter text-center py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <h1 className="mb-3">Get Exclusive Offer on Your Email</h1>
      <p className="mb-4">Subscribe to our newsletter and stay updated</p>
      
      <div className="d-flex justify-content-center">
        <div className="input-group w-75 w-md-50 w-lg-40">
          {/* Email Input */}
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            aria-label="Email Address"
            style={{ height: '50px', borderRadius: '10px 0 0 10px' }}
          />
          
          {/* Subscribe Button */}
          <button
            className="btn btn-danger"
            type="button"
            style={{ borderRadius: '0 10px 10px 0', height: '50px' }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
