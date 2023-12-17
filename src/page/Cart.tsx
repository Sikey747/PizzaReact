import { Link } from 'react-router-dom';
import { CartItems, Container } from '../components/ui/index';
import Shop from '../assets/img/cart.svg?react';
import Trash from '../assets/img/trash.svg/?react';
import { formatUaNumber } from '../../mocap/mocap';
import useCart from '../../hooks/useCart';

function Cart() {
  const { add, deleteAllItem, deleteItem, remove, dataSlice } = useCart();
  return (
    <Container className="container--cart">
      <section className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <Shop /> Корзина
          </h2>
          <button
            onClick={() => deleteAllItem()}
            type="button"
            className="cart__clear"
          >
            <Trash />
            <span>Очистить корзину</span>
          </button>
        </div>
        <div className="content__items_cart">
          {dataSlice.userPizza.map((el) => {
            return (
              <CartItems
                name={el.title}
                prise={el.price}
                quantity={el.quantity}
                size={el.sizes}
                src={el.imageUrl}
                type={el.types}
                key={el.id}
                data={el}
                remove={remove}
                add={add}
                deleteItem={deleteItem}
              />
            );
          })}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>{dataSlice.totalQuantity} шт.</b>
            </span>
            <span>
              Сумма заказа: <b>{formatUaNumber(dataSlice.totalPrise)}</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <a
              href="/"
              className="button button--outline button--add go-back-btn"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Link to="/">
                <span>Вернуться назад</span>
              </Link>
            </a>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Cart;
