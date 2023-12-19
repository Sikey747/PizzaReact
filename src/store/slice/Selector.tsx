import { RootState } from '../store';

export const selectUserPizza = (state: RootState) => state.UserPizzaSlice;
export const selectFilterPizza = (state: RootState) => state.FilterPizzaSlice;
