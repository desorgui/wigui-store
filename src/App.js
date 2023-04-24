import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './redux/products/products';
import { fetchCart, addProductCart, incrementItemQuantity } from './redux/carts/carts';
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

  const [total, setTotal] = useState(0);

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
  }, [dispatch, counter, carts.length]);

  const handleAddToCartClick = (product) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.id === product.id,
    );
    if (existingCartItemIndex !== -1) {
      dispatch(incrementItemQuantity(product.id));
    } else {
      const newCartItem = { ...product, quantity: product.quantity || 1 };
      dispatch(addProductCart(newCartItem));
      increment();
    }
  };

  return (
    <div>
      <Navbar counter={counter} handleOpen={handleOpen} />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Hero />
              <ProductList increment={increment} handleAddToCartClick={handleAddToCartClick} />
              <Analytics />
            </>
        )}
        />
        <Route path="/products/:id" element={<ProductDetail handleAddToCartClick={handleAddToCartClick} />} />
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
