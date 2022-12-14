import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const FETCHED_PRODUCT = 'FETCHED_PRODUCT';

export const getProducts = createAsyncThunk(
  FETCHED_PRODUCT,
  async () => {
    const productArr = [];
    const response = await fetch('https://fakestoreapi.com/products', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
    });
    const initValues = await response.json();
    initValues.forEach((product) => {
      productArr.push({
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        description: product.description,
        image: product.image,
        rating: { rate: product.rating.rate, count: product.rating.count },
      });
    });
    return (productArr);
  },
);

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => action.payload,
   },
});

export default productSlice.reducer;