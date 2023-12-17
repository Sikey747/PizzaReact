import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  filterType: 'Все',
  sortType: 'популярности',
};

export const FilterPizza = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilterType: (state, action) => {
      return { ...state, filterType: action.payload };
    },
    changeSortType: (state, action) => {
      return {
        ...state,
        sortType: action.payload,
      };
    },
  },
});

export const { changeFilterType, changeSortType } = FilterPizza.actions;

export const selectValue = (state: RootState) => state.FilterPizzaSlice;

export default FilterPizza.reducer;
