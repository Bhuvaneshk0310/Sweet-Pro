import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logo} alt="Sweets Logo" style={{ height: '30px', marginRight: '10px' }} />
                    SWEETS
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" onClick={() => setMenu("shop")} to="/">
                                Shop {menu === "shop" && <span className="active-indicator"></span>}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={() => setMenu("mens")} to="/mens">
                                Men {menu === "mens" && <span className="active-indicator"></span>}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={() => setMenu("womens")} to="/womens">
                                Women {menu === "womens" && <span className="active-indicator"></span>}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={() => setMenu("kids")} to="/kids">
                                Kids {menu === "kids" && <span className="active-indicator"></span>}
                            </Link>
                        </li>
                    </ul>
                    <div className='nav-login-cart d-flex align-items-center'>
                        <Link to='/login'><button className="btn btn-outline-primary">Login</button></Link>
                        <Link to='/cart' className="ms-3 position-relative">
                            <img className="Carts" src={cart_icon} alt="Cart" />
                            <div className='nav-cart-count'>0</div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'
// import logo from '../Assets/logo.png'
// import cart_icon from '../Assets/cart_icon.png'

// const Navbar = () => {

//     const [menu,setMenu] = useState("shop");

//     return (
//         <div className='navbar'>
//             <div className="nav-logo">
//              <img src={logo} alt=""/>
//              <p>SWEETS</p>
//                </div> 
//                <ul className="nav-menu">
//                 <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
//                 <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
//                 <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}}to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
//                 <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
//                </ul>
//                <div className='nav-login-cart'>
//                 <Link to='/login'><button>Login</button></Link>
//                 <Link to='/cart'>  <img className="Carts" src={cart_icon} alt=""/></Link>
//                 <div className='nav-cart-count'>0</div>
//                </div>
//         </div>
//     )
// }
// export default Navbar