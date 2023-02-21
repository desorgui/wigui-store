import React, { useEffect, useState } from 'react'
import { 
  Routes,
  Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './redux/products/products';
import { fetchCart } from './redux/carts/carts';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';

function App() {
  const dispatch = useDispatch();

  const carts = useSelector((state) => state.carts);

  const [counter, setCounter] = useState(0);


  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    dispatch(getProducts());
    dispatch(fetchCart());
    setCounter(carts.length);
  }, [dispatch, counter]);
  
  return (
    <div>
      <Navbar counter={counter} decrement={decrement} />
        <Routes>
          <Route path="/" element={<Hero increment={increment} />} />
          {/* <Route path="/" element={<ProductList />} /> */}
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
