import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const FETCHED_CART = 'FETCHED_CART';

export const getCarts = createAsyncThunk(
  FETCHED_CART,
  async () => {
    const cartArr = [];
    const response = await fetch('https://fakestoreapi.com/carts', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
    });
    const initValues = await response.json();
    initValues.forEach((cart) => {
      cartArr.push({
        id: cart.id,
        userId: cart.userId,
        date: cart.date,
        products: cart.products,
      });
    });
    return (cartArr);
  },
);

const cartSlice = createSlice({
  name: 'carts',
  initialState: [],
  extraReducers: {
    [getCarts.fulfilled]: (state, action) => action.payload,
   },
});

export default cartSlice.reducer;