import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Pizza } from '../Interfaces/index';
import { addPizzaToStore } from '../src/store/slice/UserPizza';
import { setNewFilterData } from '../src/store/slice/FilterPizza';
import { getAllPizza, getCountPizzas } from '../src/api/api';
import { selectFilterPizza } from '../src/store/slice/Selector';

function useMainPage() {
  const { filterType, sortType } = useSelector(selectFilterPizza);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(4);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  const {
    data: pizzas,
    isLoading,
    error,
  } = useQuery<Pizza[]>({
    queryKey: ['pizzas', filterType, sortType, page, limit],
    queryFn: async () => {
      if (isFirstRender.current) {
        if (!(searchParams.size === 0)) {
          const searchParamsQuery = {
            filterType: +(searchParams.get('filter') || ''),
            sortType: searchParams.get('sort') || 0,
            page: +(searchParams.get('page') || ''),
            limit: +(searchParams.get('limit') || ''),
          };
          const setNewData = async () => {
            setPage(searchParamsQuery.page);
            setLimit(searchParamsQuery.limit);
            dispatch(
              setNewFilterData({
                filterType: searchParamsQuery.filterType,
                sortType: searchParamsQuery.sortType,
              })
            );
          };
          await setNewData();
        }
      }
      return getAllPizza(filterType, sortType, page, limit);
    },
  });

  const { data: maxPizzas } = useQuery<Pizza[]>({
    queryKey: ['countPizzas'],
    queryFn: getCountPizzas,
  });

  const getTypePizza = useCallback(
    (sizeSelect: number, typeSelect: number, data: Pizza) => {
      const UpdateData = { ...data, types: typeSelect, sizes: sizeSelect };
      dispatch(addPizzaToStore(UpdateData));
    },
    [dispatch]
  );

  let totalPages = 1;
  const chengTotalPage = (val: Pizza[]) => {
    if (val) {
      return +(val.length / limit).toFixed();
    }
    return 1;
  };
  if (maxPizzas?.length) {
    totalPages = chengTotalPage(maxPizzas);
  }

  useEffect(() => {
    if (maxPizzas?.length) {
      setSearchParams({
        filter: filterType.toString(),
        sort: sortType.toString(),
        page: page.toString(),
        limit: limit.toString(),
      });
    }
  }, [filterType, sortType, page, limit, maxPizzas]);
  return {
    error,
    isLoading,
    pizzas,
    location,
    getTypePizza,
    page,
    setPage,
    totalPages,
  };
}

export default useMainPage;
