import React, { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import ArrowTop from '../../assets/img/arrow-top.svg?react';
import { sort } from '../../../mocap/mocap';

type SortProps = {
  selectSortUser: string;
  onClick?: (e: string) => void;
};

function Sort({ selectSortUser: selectSort, onClick }: SortProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const selectSortType = sort.find((el) => {
    return el.type === selectSort;
  });

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
          {selectSortType?.title}
        </button>
      </div>
      <div className={isOpen ? 'sort__popup active' : 'sort__popup'}>
        <ul ref={ref}>
          {sort.map((el) => {
            return (
              <li key={el.title}>
                <button
                  onClick={() => onClick && onClick(el.type)}
                  type="button"
                  className={selectSortType?.title === el.title ? 'active' : ''}
                >
                  {el.title}
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
