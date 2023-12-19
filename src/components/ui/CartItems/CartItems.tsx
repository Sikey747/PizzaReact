import Minus from '../../../assets/img/minus.svg?react';
import Plus from '../../../assets/img/plus.svg?react';
import Delete from '../../../assets/img/delete.svg?react';
import { pizzaTypes, formatUaNumber } from '../../../../mocap/mocap';
import { PizzaNoArray } from '../../../../Interfaces/index';

interface CardItemsProps {
  src: string;
  name: string;
  quantity: number;
  type: number | number[];
  size: number | number[];
  prise: number;
  data: PizzaNoArray;
  remove: (data: PizzaNoArray) => void;
  add: (data: PizzaNoArray) => void;
  deleteItem: (id: number) => void;
}

function CartItems({
  src,
  name,
  quantity,
  type,
  size,
  prise,
  data,
  remove,
  add,
  deleteItem,
}: CardItemsProps) {
  const typeSelectPizza = pizzaTypes.find((el) =>
    el.type === type ? el.title : null
  );

  return (
    <div className="cart__item">
      <div className="cart__item-left">
        <div className="cart__item-img">
          <img className="pizza-block__image" src={src} alt={name} />
        </div>
        <div className="cart__item-info">
          <h3>{name}</h3>
          <p>
            {typeSelectPizza?.title}, {size} см.
          </p>
        </div>
      </div>
      <div className="cart__item-right">
        <div className="cart__item-count">
          <button
            onClick={() => remove(data)}
            type="button"
            className="button button--outline button--circle cart__item-count-minus"
          >
            <Minus />
          </button>
          <b>{quantity}</b>
          <button
            onClick={() => add(data)}
            type="button"
            className="button button--outline button--circle cart__item-count-plus"
          >
            <Plus />
          </button>
        </div>
        <div className="cart__item-price">
          <b>{formatUaNumber(prise * quantity)}</b>
        </div>
        <div className="cart__item-remove">
          <button
            onClick={() => deleteItem(data.id)}
            type="button"
            className="button button--outline button--circle"
          >
            <Delete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
