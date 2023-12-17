import { useSelector, useDispatch } from 'react-redux';
import { Categories, Sort } from './ui/index';
import {
  changeFilterType,
  changeSortType,
  selectValue,
} from '../store/slice/FilterPizza';

function SortLine() {
  const storeData = useSelector(selectValue);
  const dispatch = useDispatch();

  const handelSortCheng = (sortType: string) => {
    dispatch(changeSortType(sortType));
  };

  const handelTypeCheng = (sortType: string) => {
    dispatch(changeFilterType(sortType));
  };

  return (
    <section className="content__top">
      <Categories
        selectTypeUser={storeData.filterType}
        onClick={handelTypeCheng}
      />
      <Sort selectSortUser={storeData.sortType} onClick={handelSortCheng} />
    </section>
  );
}

export default SortLine;
