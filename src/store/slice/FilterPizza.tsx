import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  filterType: 1000,
  sortType: 'rating',
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
    setNewFilterData: (state, action) => {
      return {
        sortType: action.payload.sortType,
        filterType: action.payload.filterType,
      };
    },
  },
});

export const { changeFilterType, changeSortType, setNewFilterData } =
  FilterPizza.actions;

export default FilterPizza.reducer;
