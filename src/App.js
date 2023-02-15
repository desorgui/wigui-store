import React, { useEffect } from 'react';
import { 
  Routes,
  // BrowserRouter as Router,
  Route,
  // Outlet,
  // Navigate,
  // useLocation 
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProducts } from './redux/products/products';
import { fetchCart } from './redux/carts/carts';
// import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(fetchCart());
  }, [dispatch]);
  
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/" element={<ProductList />} /> */}
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      <Analytics />
      <Footer />
    </div>
  );
}

export default App;
