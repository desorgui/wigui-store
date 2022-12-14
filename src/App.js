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
import ProductList from './components/ProductList';
import Hero from './components/Hero';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCarts());
  }, [dispatch]);
  
  return (
    <div>
      <Hero />
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
