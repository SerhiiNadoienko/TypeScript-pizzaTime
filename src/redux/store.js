import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
export const store = configureStore({
  reducer: { filter },
  devTools: process.env.NODE_ENV !== 'production',
});
