import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const FETCHED_PRODUCT = 'FETCHED_PRODUCT';

export const getProducts = createAsyncThunk(
  FETCHED_PRODUCT,
  async () => {
    const productArr = [];
    const response = await fetch('https://dummyjson.com/products', {
      // const response = await fetch('data.json', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
    });
    const initValues = await response.json();
    initValues.products.forEach((product) => {
    // initValues.forEach((product) => {
      productArr.push({
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        description: product.description,
        images: product.images,
        rating: product.rating,
        stock: product.stock,
        thumbnail: product.thumbnail,
        brand: product.brand,
        discountPercentage: product.discountPercentage,
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
