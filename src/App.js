import React, { useEffect, useState } from 'react';
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
import ProductList from './components/ProductList';
import Analytics from './components/Analytics';
import CartPopup from './components/cartPopup';

function App() {
  const dispatch = useDispatch();

  const carts = useSelector((state) => state.carts);

  const [counter, setCounter] = useState(0);

  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const isClose = () => {
    setIsOpen(false);
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const [total, setTotal] = useState(0);

  const cartItems = useSelector((state) => state.carts);
  const cartProducts = cartItems;

  useEffect(() => {
    const total = cartProducts.reduce((acc, product) => {
      const { price } = product;
      const { quantity } = product;
      return acc + (price * quantity);
    }, 0);
    setTotal(total);
  }, [total, cartItems]);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(fetchCart());
    setCounter(carts.length);
  }, [dispatch, counter]);

  return (
    <div>
      <Navbar counter={counter} handleOpen={handleOpen} />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Hero />
              <ProductList increment={increment} />
              <Analytics />
            </>
        )}
        />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} total={total} />} />
      </Routes>
      {isOpen && (
      <CartPopup
        isOpen={isOpen}
        isClose={isClose}
        decrement={decrement}
        cartItems={cartItems}
        total={total}
      />
      ) }
      <Footer />
    </div>
  );
}

export default App;
