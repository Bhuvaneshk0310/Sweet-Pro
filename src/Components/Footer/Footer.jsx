import React from 'react';
import './Footer.css';
import logo from '../Assets/logo.png'; // removed trailing space
import Pinterest_logo from '../Assets/Pinterest_logo.png'; // removed trailing space
import Instagram_logo from '../Assets/Instagram_logo.png'; // removed trailing space
import Whatapp_logo from '../Assets/Whatapp_logo.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={logo} alt="Logo"/>
                <p>Sweets</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icon'>
                <div className="footer-icons-container">
                    <img className='footerI' src={Instagram_logo} alt="Instagram"/>
                </div>
                <div className="footer-icons-container">
                    <img className='footerP'src={Pinterest_logo} alt="Pinterest"/>
                </div>
                <div className="footer-icons-container">
                    <img className='footerW' src={Whatapp_logo} alt="WhatsApp"/>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024- All rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
