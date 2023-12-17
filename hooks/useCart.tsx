import { useDispatch, useSelector } from 'react-redux';
import {
  deletePizzaItemFromStore,
  addPizzaToStore,
  removePizzaFromStore,
  selectValue,
  deleteAllPizzaFromStore,
} from '../src/store/slice/UserPizza';
import { PizzaNoArray } from '../Interfaces/index';

function useCart() {
  const dataSlice = useSelector(selectValue);
  const dispatch = useDispatch();

  const remove = (dataRemove: PizzaNoArray) => {
    dispatch(removePizzaFromStore(dataRemove));
  };

  const add = (dataAdd: PizzaNoArray) => {
    dispatch(addPizzaToStore(dataAdd));
  };

  const deleteItem = (id: number) => {
    dispatch(deletePizzaItemFromStore(id));
  };

  const deleteAllItem = () => {
    dispatch(deleteAllPizzaFromStore());
  };
  return { deleteAllItem, deleteItem, add, remove, dataSlice };
}

export default useCart;
