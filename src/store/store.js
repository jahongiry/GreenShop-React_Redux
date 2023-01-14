import { configureStore } from '@reduxjs/toolkit';
import CategorySlice from './CategorySlice';

const store = configureStore({
  reducer: {
    category: CategorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
