import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from './ui/Container';
import HeaderCard from './ui/HeaderCard';
import { selectUserPizza } from '../store/slice/Selector';

function Header() {
  const storeData = useSelector(selectUserPizza);

  return (
    <header className="header">
      <Container>
        <Link to="/" className="header__logo">
          <img width="38" src="assets/img/pizza-logo.svg" alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </Link>
        <Link to="/cart">
          <HeaderCard
            count={storeData.totalQuantity}
            price={storeData.totalPrise}
          />
        </Link>
      </Container>
    </header>
  );
}

export default Header;
