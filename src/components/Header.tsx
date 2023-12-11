import { useSelector, useDispatch } from 'react-redux';
import Container from './Container';
import HeaderCard from './HeaderCard';
import { selectValue } from '../store/slice/AddSlice';
import { Pizzas } from '../../Interfaces/index';

function Header() {
  const storeData = useSelector(selectValue);
  const dispatch = useDispatch();

  const amountPrice = (pizza: Pizzas[]) => {
    return pizza.reduce((sum, el) => {
      return sum + el.price;
    }, 0);
  };

  return (
    <header className="header">
      <Container>
        <div className="header__logo">
          <img width="38" src="../assets/img/logo.png" alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <HeaderCard
          count={storeData.quantity}
          price={amountPrice(storeData.userPizza)}
        />
      </Container>
    </header>
  );
}

export default Header;
