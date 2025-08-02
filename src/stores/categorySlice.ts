import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { categoryServices } from 'services/category.service';
import { CategoryGroup } from 'types/category';

interface CategoryState {
  categories: CategoryGroup[];
  isLoading: boolean;
  error: string | null;
}
const initialState: CategoryState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const getCategory = createAsyncThunk('category/get', async (_, thunkAPI) => {
  try {
    const res = await categoryServices.get();
    if (res?.data.success) {
      return res.data.data;
    }
  } catch (err) {
    return thunkAPI.rejectWithValue('Lỗi khi lấy danh mục');
  }
});

const categorySlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default categorySlice.reducer;
