import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const FETCHED_CART = 'FETCHED_CART';

// export const getCarts = createAsyncThunk(
//   FETCHED_CART,
//   async () => {
//     const cartArr = [];
//     const response = await fetch('https://dummyjson.com/carts/user/5', {
//       method: 'GET',
//       headers: {
//         'content-type': 'application/json',
//         accept: 'application/json',
//       },
//     });
//     const cartValue = await response.json();
//     console.log(cartValue);
//     const cart = cartValue.carts[0];
//       cartArr.push({
//         id: cart.id,
//         userId: cart.userId,
//         date: cart.date,
//         products: cart.products,
//         total: cart.total,
//         discountedTotal: cart.discountedTotal,
//         totalProducts: cart.totalProducts,
//         totalQuantity: cart.totalQuantity,
//     });
//     return (cartArr);
//   },
// );

export const addProductCart = createAsyncThunk(
  'cart/addCart',
  async (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    return (product);
  }
);

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    return (cartItems);
  }
);

const cartSlice = createSlice({
  name: 'carts',
  initialState: [],
  extraReducers: {
    [fetchCart.fulfilled]: (state, action) => action.payload,
    [addProductCart.fulfilled]: (state, action) => ([...state, action.payload]),
    // [deleteReservation.fulfilled]: (state, action) => (state.filter((elem) => elem.id !== action.payload)), /* eslint-disable-line */
   },
});

export default cartSlice.reducer;