import React, { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import ArrowTop from '../assets/img/arrow-top.svg?react';

type SortProps = {
  selectSortUser: string;
};

function Sort({ selectSortUser }: SortProps) {
  const sort = ['популярности', 'цене', 'алфавиту'];
  const [isOpen, setIsOpen] = useState(false);
  const [selectSort, setSelectSort] = useState(selectSortUser);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsOpen(false);
  });

  console.log(selectSortUser);

  return (
    <div className="sort">
      <div className="sort__label">
        <ArrowTop
          style={
            isOpen
              ? { rotate: '180deg', transition: 'all 0.3s ease-in-out' }
              : {}
          }
        />
        <b>Сортировка по:</b>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {selectSort}
        </button>
      </div>
      <div className={isOpen ? 'sort__popup active' : 'sort__popup'}>
        <ul ref={ref}>
          {sort.map((el) => {
            return (
              <li key={el}>
                <button
                  onClick={() => setSelectSort(el)}
                  type="button"
                  className={selectSort === el ? 'active' : ''}
                >
                  {el}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sort;
