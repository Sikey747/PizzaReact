import React, { useState } from 'react';

function Categories() {
  const category = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];
  const [selectCategory, setSelectCategory] = useState(category[0]);

  return (
    <div className="categories">
      <ul>
        {category.map((el) => {
          return (
            <li key={el}>
              <button
                onClick={() => setSelectCategory(el)}
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
