import { configureStore, combineReducers } from '@reduxjs/toolkit';

import productSlice from './products/products';
import cartsSlice from './carts/carts';
// import loginSlice from './auth/login';

const reducer = combineReducers({
  // user: loginSlice,
  products: productSlice,
  carts: cartsSlice,
});
const store = configureStore({ reducer });
export default store;
