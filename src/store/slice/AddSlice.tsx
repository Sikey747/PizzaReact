import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserPizzaStore } from '../../../Interfaces/index';
import { RootState } from '../store';

const initialState: UserPizzaStore = {
  quantity: 0,
  sortType: 'популярности',
  userPizza: [
    {
      id: 0,
      imageUrl:
        'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
      title: 'Пепперони Фреш с перцем',
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 1803,
      category: 0,
      rating: 4,
    },
    {
      id: 1,
      imageUrl:
        'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg',
      title: 'Сырная',
      types: [0],
      sizes: [26, 40],
      price: 245,
      category: 0,
      rating: 6,
    },
  ],
};

export const counterSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    increment: (state) => {
      return { ...state, quantity: state.quantity + 1 };
    },
    decrement: (state) => {
      if (state.quantity > 0) {
        return { ...state, quantity: state.quantity - 1 };
      }
      return { ...state, quantity: 0 };
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const selectValue = (state: RootState) => state.userPizza;

export default counterSlice.reducer;
