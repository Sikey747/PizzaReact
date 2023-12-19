import { useSelector, useDispatch } from 'react-redux';
import { Categories, Sort } from './ui/index';
import { changeFilterType, changeSortType } from '../store/slice/FilterPizza';
import { selectFilterPizza } from '../store/slice/Selector';

function SortLine() {
  const storeData = useSelector(selectFilterPizza);
  const dispatch = useDispatch();

  const handelSortCheng = (sortType: string) => {
    dispatch(changeSortType(sortType));
  };

  const handelTypeCheng = (sortType: number) => {
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
