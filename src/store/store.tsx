import { configureStore } from '@reduxjs/toolkit';
import AddSlice from './slice/AddSlice';

export const store = configureStore({
  reducer: {
    userPizza: AddSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
