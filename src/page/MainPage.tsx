import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { Container, PizzaCard } from '../components/ui/index';
import { pizzas } from '../../mocap/mocap';
import { selectValue, addPizzaToStore } from '../store/slice/UserPizza';
import PizzaSkeleton from '../components/ui/PizzaBlock/Skeleton';
import SortLine from '../components/SortLine';
import { Pizza } from '../../Interfaces/index';

function MainPage() {
  const storeData = useSelector(selectValue);
  const dispatch = useDispatch();
  const isLoading = false;

  const getTypePizza = useCallback(
    (sizeSelect: number, typeSelect: number, data: Pizza) => {
      const UbdateData = { ...data, types: typeSelect, sizes: sizeSelect };
      dispatch(addPizzaToStore(UbdateData));
    },
    [dispatch]
  );

  return (
    <section>
      <Container className="container">
        <SortLine />
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? Array(6).map((_, idx) => {
                return <PizzaSkeleton key={idx} />;
              })
            : pizzas.map((el) => {
                return (
                  <PizzaCard
                    key={el.id}
                    price={el.price}
                    imageUrl={el.imageUrl}
                    sizes={el.sizes}
                    title={el.title}
                    types={el.types}
                    onClick={getTypePizza}
                    data={el}
                  />
                );
              })}
        </div>
      </Container>
    </section>
  );
}

export default MainPage;
