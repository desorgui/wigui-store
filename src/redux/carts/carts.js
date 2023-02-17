import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const FETCHED_CART = 'FETCHED_CART';
const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'

export const addProductCart = createAsyncThunk(
  'cart/addCart',
  async (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    return (product);
  }
);


export const removeProductCart = createAsyncThunk(
  'cart/removeProduct',
  async (productId) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== productId
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    return(updatedCartItems);
  }
)

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    return (cartItems);
  }
);

export const incrementItem = (id) => ({ type: INCREMENT_QUANTITY, payload: id });

export const incrementItemQuantity = createAsyncThunk(
  INCREMENT_QUANTITY,
  async (id) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    return (updatedCartItems);
  }
);

export const decrementItemQuantity = createAsyncThunk(
  DECREMENT_QUANTITY,
  async (id) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    return (updatedCartItems);
  }
);

export const decrementItemQuant = (id) => ({ type: DECREMENT_QUANTITY, payload: id });

const cartSlice = createSlice({
  name: 'carts',
  initialState: [],
  extraReducers: {
    [fetchCart.fulfilled]: (state, action) => action.payload,
    [addProductCart.fulfilled]: (state, action) => ([...state, action.payload]),
    [removeProductCart.fulfilled]: (state, action) => (action.payload),
    [incrementItemQuantity.fulfilled]: (state, action) => (action.payload),
    [decrementItemQuantity.fulfilled]: (state, action) => (action.payload),
  },
});

export default cartSlice.reducer;