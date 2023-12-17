import React from 'react';
import { Container } from '../components/ui/index';

function NotFound() {
  return (
    <Container>
      <div className="cart cart--empty">
        <h2>
          Корзина пустая <i>😕</i>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src="../assets/img/empty-cart.png" alt="Empty cart" />
        <a href="/" className="button button--black">
          <button type="button">Вернуться назад</span>
        </a>
      </div>
    </Container>
  );
}

export default NotFound;
