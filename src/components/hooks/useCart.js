import { useState, useEffect } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(existingCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.id === product.id,
    );
    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      const newCartItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== productId,
    );
    setCartItems(updatedCartItems);
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.id === productId,
    );
    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity = newQuantity;
      setCartItems(updatedCartItems);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
  };
};

export default useCart;
