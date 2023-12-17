import React, { useState } from 'react';

interface CategoriesProps {
  selectTypeUser: string;
  onClick?: (e: string) => void;
}

function Categories({
  selectTypeUser: selectCategory,
  onClick,
}: CategoriesProps) {
  const category = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className="categories">
      <ul>
        {category.map((el) => {
          return (
            <li key={el}>
              <button
                onClick={() => onClick && onClick(el)}
                type="button"
                className={selectCategory === el ? 'active' : ''}
              >
                {el}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
