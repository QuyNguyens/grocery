// slices/product.slice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productServices from 'services/product.service';
import { ProductState } from 'types/product';

interface CollectionsState {
  [collectionKey: string]: ProductState;
}

interface ProductSliceState {
  collections: CollectionsState;
}

const initialState: ProductSliceState = {
  collections: {},
};

interface FetchProductsParams {
  collectionKey: string;
  page?: number;
  limit?: number;
  name: string;
}

export const fetchProductsByCollection = createAsyncThunk(
  'product/fetchProductsByCollection',
  async ({ collectionKey, page = 1, limit = 10, name }: FetchProductsParams, thunkAPI) => {
    try {
      const response = await productServices.fetchProductsByCollection(collectionKey, page, limit, name);
      const { data, meta } = response.data;

      return {
        collectionKey,
        products: data,
        currentPage: meta.currentPage,
        totalPages: meta.totalPages,
        totalItems: meta.totalItems,
        limit: meta.limit,
      };
    } catch (err) {
      return thunkAPI.rejectWithValue({
        collectionKey,
        message: 'Lỗi khi lấy sản phẩm',
      });
    }
  },
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCollection.pending, (state, action) => {
        const key = action.meta.arg.collectionKey;
        state.collections[key] = {
          ...(state.collections[key] || {
            products: [],
            currentPage: 1,
            totalPages: 0,
            totalItems: 0,
            limit: 10,
          }),
          isLoading: true,
          error: null,
        };
      })
      .addCase(fetchProductsByCollection.fulfilled, (state, action) => {
        const { collectionKey, products, currentPage, totalPages, totalItems, limit } = action.payload;

        state.collections[collectionKey] = {
          products,
          currentPage,
          totalPages,
          totalItems,
          limit,
          isLoading: false,
          error: null,
        };
      })
      .addCase(fetchProductsByCollection.rejected, (state, action) => {
        const { collectionKey, message } = action.payload as {
          collectionKey: string;
          message: string;
        };

        state.collections[collectionKey] = {
          ...(state.collections[collectionKey] || {
            products: [],
            currentPage: 1,
            totalPages: 0,
            totalItems: 0,
            limit: 10,
          }),
          isLoading: false,
          error: message,
        };
      });
  },
});

export default productSlice.reducer;
