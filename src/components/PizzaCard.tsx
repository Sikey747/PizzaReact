import React, { useState } from 'react';
import { Pizzas as PizzasType } from '../../Interfaces/index';
import Plus from '../assets/img/plus.svg?react';

interface PizzasTypeProps
  extends Omit<PizzasType, 'id' | 'category' | 'rating'> {
  numberSelectPizza?: number | undefined;
  upCount?: () => void;
}

function PizzaCard({
  title,
  imageUrl,
  price,
  sizes,
  numberSelectPizza,
  types,
  upCount,
}: PizzasTypeProps) {
  const [selectSize, setSelectSize] = useState(sizes[0]);
  const [selectType, setSelectType] = useState(types[0]);
  const pizzaTypes = [
    { title: 'тонкое', type: 0 },
    { title: 'традиционное', type: 1 },
  ];
  const pizzaSizes = [26, 30, 40];

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt={title} />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {pizzaTypes.map((el, idx) => {
            return (
              <li key={el.title}>
                <button
                  onClick={() => setSelectType(idx)}
                  type="button"
                  className={idx === selectType ? 'active' : ''}
                  disabled={!types.includes(el.type)}
                >
                  {el.title}
                </button>
              </li>
            );
          })}
        </ul>
        <ul>
          {pizzaSizes.map((el) => {
            return (
              <li key={el}>
                <button
                  type="button"
                  onClick={() => setSelectSize(el)}
                  className={el === selectSize ? 'active' : ''}
                  disabled={!sizes.includes(el)}
                >
                  {el} см.
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₴</div>
        <button
          type="button"
          onClick={() => upCount && upCount()}
          className="button button--outline button--add"
        >
          <Plus />
          <span>Добавить</span>
          {numberSelectPizza && <i>{numberSelectPizza}</i>}
        </button>
      </div>
    </div>
  );
}

export default PizzaCard;
