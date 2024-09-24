

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import b4 from './Components/Assets/b4.jpg'
import b6 from './Components/Assets/b6.jpg'
import b2 from './Components/Assets/b2.jpg'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={b6} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={b4}  category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={b2} category="kid" />} />
          <Route path='/product/' element={<Product />} >
         <Route path=':productId'element={<Product />} />
                   </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
