import React, { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import ArrowTop from '../../assets/img/arrow-top.svg?react';

type SortProps = {
  selectSortUser: string;
  onClick?: (e: string) => void;
};

function Sort({ selectSortUser: selectSort, onClick }: SortProps) {
  const sort = ['популярности', 'цене', 'алфавиту'];
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsOpen(false);
  });

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
                  onClick={() => onClick && onClick(el)}
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
