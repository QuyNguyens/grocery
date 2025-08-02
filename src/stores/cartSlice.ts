import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import cartService from 'services/cart.service';
import { CartItem } from 'types/cart';

interface CartState {
  cartItem: CartItem[];
  currentPage: number;
  totalItem: number;
  itemPerPage: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: CartState = {
  cartItem: [],
  currentPage: 1,
  totalItem: 0,
  itemPerPage: 10,
  isLoading: false,
  error: null,
};

interface FetchCartParams {
  page?: number;
  limit?: number;
  userId: string;
}

// get cart by userId
export const getCart = createAsyncThunk(
  'cart/getCart',
  async ({ userId, page = 1, limit = 10 }: FetchCartParams, thunkAPI) => {
    try {
      const response = await cartService.get(userId, page, limit);
      const { data, meta } = response.data;
      return {
        items: data,
        currentPage: meta.currentPage,
        itemPerPage: meta.limit,
        totalItem: meta.totalItems,
      };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Lỗi lấy giỏ hàng');
    }
  },
);

// add items to cart
export const addCartItem = createAsyncThunk(
  'cart/addCartItem',
  async ({ item, userId }: { item: any; userId: string }, thunkAPI) => {
    try {
      const response = await cartService.addCartItem(item, userId);
      return response.data.data as CartItem;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Lỗi thêm sản phẩm');
    }
  },
);

// update quantity for cartItem
export const updateCartItem = createAsyncThunk(
  'cart/updateCartItem',
  async (
    { userId, itemId, quantity }: { userId: string; itemId: string; quantity: number },
    thunkAPI,
  ) => {
    try {
      const response = await cartService.updateCartItem(userId, itemId, quantity);
      const { data } = response.data;
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Lỗi cập nhật sản phẩm');
    }
  },
);

// delete cartItem from cart
export const deleteCartItem = createAsyncThunk(
  'cart/deleteCartItem',
  async ({ userId, itemId }: { userId: string; itemId: string }, thunkAPI) => {
    try {
      await cartService.deleteCartItem(userId, itemId);
      return itemId;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Lỗi xóa sản phẩm');
    }
  },
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItem = [];
      state.totalItem = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      // get Cart
      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItem = action.payload.items;
        state.currentPage = action.payload.currentPage;
        state.totalItem = action.payload.totalItem;
        state.itemPerPage = action.payload.itemPerPage;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      // add cartItem
      .addCase(addCartItem.fulfilled, (state, action) => {
        const exist = state.cartItem.find((item) => item._id === action.payload._id);
        if (exist) {
          exist.quantity = action.payload.quantity;
        } else {
          state.cartItem = [...state.cartItem, action.payload];
          state.totalItem += 1;
        }
      })

      .addCase(addCartItem.rejected, (state, action) => {
        console.error('Thêm sản phẩm thất bại:', action.payload);
      })

      // update cartItem quantity
      .addCase(updateCartItem.fulfilled, (state, action) => {
        const { itemId, quantity } = action.payload;

        const item = state.cartItem.find((item) => item._id === itemId);
        if (item) {
          item.quantity = Number(quantity);
        }
      })

      // delete cartItem from cart
      .addCase(deleteCartItem.fulfilled, (state, action: PayloadAction<string>) => {
        state.cartItem = state.cartItem.filter((i) => i._id !== action.payload);
        state.totalItem -= 1;
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
