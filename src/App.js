import React, { useEffect } from 'react';
import { 
  Routes,
  BrowserRouter as Router,
  Route,
  // Outlet,
  // Navigate,
  // useLocation 
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProducts } from './redux/products/products';
import { getCarts } from './redux/carts/carts';
// import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCarts());
  }, [dispatch]);
  
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/" element={<ProductList />} /> */}
        </Routes>
      </Router>
      <Analytics />
      <Footer />
    </div>
  );
}

export default App;
