import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from './ui/Container';
import HeaderCard from './ui/HeaderCard';
import { selectValue } from '../store/slice/UserPizza';
import { Pizza } from '../../Interfaces/index';

function Header() {
  const storeData = useSelector(selectValue);

  return (
    <header className="header">
      <Container>
        <div className="header__logo">
          <img
            width="38"
            src="/src/assets/img/pizza-logo.svg"
            alt="Pizza logo"
          />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
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
