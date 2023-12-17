import { configureStore } from '@reduxjs/toolkit';
import UserPizzaSlice from './slice/UserPizza';
import FilterPizzaSlice from './slice/FilterPizza';

export const store = configureStore({
  reducer: {
    UserPizzaSlice,
    FilterPizzaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
