

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import a1 from './Components/Assets/a1.jpg'
import a2 from './Components/Assets/a2.jpg'
import a3 from './Components/Assets/a3.jpg'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={a2} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={a1}  category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={a3} category="kid" />} />
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
