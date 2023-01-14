import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  card: [],
  like: [],
  readMore: false,
  pagination: 0,
};

const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    cartAdd: (state, action) => {
      state.card.push(action.payload);
    },
    likeAdd: (state, action) => {
      state.like.push(action.payload);
    },
    readMore: (state, action) => {
      state.readMore = action.payload;
    },
    readLess: (state, action) => {
      state.readMore = false;
    },
    paginationForward: (state, action) => {
      state.pagination = 9;
    },
    paginationBackward: (state, action) => {
      state.pagination = 0;
    },
  },
});

export const {
  cartAdd,
  likeAdd,
  readMore,
  readLess,
  paginationForward,
  paginationBackward,
} = CategorySlice.actions;
export default CategorySlice.reducer;
