import { useSelector, useDispatch } from 'react-redux';
import { Container, Categories, Sort, PizzaCard } from './components/index';
import { pizzas } from '../mocap/mocap';
import { selectValue } from './store/slice/AddSlice.tsx';

function MainPage() {
  const storeData = useSelector(selectValue);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <div className="content">
        <Container className="container">
          <div className="content__top">
            <Categories />
            <Sort selectSortUser={storeData.sortType} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((el) => {
              return (
                <PizzaCard
                  key={el.id}
                  price={el.price}
                  imageUrl={el.imageUrl}
                  sizes={el.sizes}
                  title={el.title}
                  types={el.types}
                />
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default MainPage;
