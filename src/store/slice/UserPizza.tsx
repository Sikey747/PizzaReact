import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserPizzaStore, Pizza } from '../../../Interfaces/index';

const initialState: UserPizzaStore = {
  totalQuantity: 0,
  totalPrise: 0,
  userPizza: [],
};

const updateTotals = (userPizza: Pizza[]) => {
  const totalQuantity = userPizza.reduce((acc, el) => acc + el.quantity, 0);
  const totalPrise = userPizza.reduce(
    (acc, el) => acc + el.price * el.quantity,
    0
  );
  return { totalQuantity, totalPrise };
};

export const userPizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addPizzaToStore: (state, action: PayloadAction<Pizza>) => {
      let userPizza;

      const existingPizza = state.userPizza.find(
        (el) => el.id === action.payload.id
      );

      if (existingPizza) {
        userPizza = state.userPizza.map((el) =>
          el.id === existingPizza.id ? { ...el, quantity: el.quantity + 1 } : el
        );
      } else {
        const newPizza = { ...action.payload, quantity: 1 };
        userPizza = [...state.userPizza, newPizza];
      }

      const { totalQuantity, totalPrise } = updateTotals(userPizza);

      return {
        ...state,
        userPizza,
        totalQuantity,
        totalPrise,
      };
    },
    removePizzaFromStore: (state, action: PayloadAction<Pizza>) => {
      const existingPizza = state.userPizza.find(
        (el) => el.id === action.payload.id
      );

      const userPizza = state.userPizza.map((el) => {
        if (el.id === existingPizza?.id) {
          if (el.quantity <= 0) {
            return { ...el, quantity: 0 };
          }
          return { ...el, quantity: el.quantity - 1 };
        }
        return { ...el };
      });

      const { totalQuantity, totalPrise } = updateTotals(userPizza);
      return {
        ...state,
        userPizza,
        totalQuantity,
        totalPrise,
      };
    },
    deletePizzaItemFromStore: (state, action: PayloadAction<number>) => {
      const existingPizza = state.userPizza.find(
        (el) => el.id === action.payload
      );

      const userPizza = state.userPizza.filter((el) => {
        return el.id !== existingPizza?.id;
      });

      const { totalQuantity, totalPrise } = updateTotals(userPizza);

      return {
        ...state,
        userPizza,
        totalQuantity,
        totalPrise,
      };
    },
    deleteAllPizzaFromStore: (state) => {
      const userPizza: Pizza[] = [];
      const totalQuantity = 0;
      const totalPrise = 0;

      return {
        ...state,
        userPizza,
        totalQuantity,
        totalPrise,
      };
    },
  },
});

export const {
  addPizzaToStore,
  removePizzaFromStore,
  deletePizzaItemFromStore,
  deleteAllPizzaFromStore,
} = userPizzaSlice.actions;

export default userPizzaSlice.reducer;
