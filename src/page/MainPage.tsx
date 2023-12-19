import { Container, PizzaCard } from '../components/ui/index';
import PizzaSkeleton from '../components/ui/PizzaBlock/Skeleton';
import SortLine from '../components/SortLine';
import Pagination from '../components/ui/Pagination';
import useMainPage from '../../hooks/useMainPage';

function MainPage() {
  const {
    error,
    isLoading,
    pizzas,
    location,
    getTypePizza,
    page,
    setPage,
    totalPages,
  } = useMainPage();
  return (
    <section>
      <Container className="container">
        <SortLine />
        <div className="content__items">
          {error && <p>{error.message}</p>}
          {isLoading &&
            [...Array(6)].map((_, idx) => {
              return <PizzaSkeleton key={idx} />;
            })}
          {!isLoading &&
            pizzas &&
            pizzas.map((el) => {
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
                  id={el.id}
                  location={location}
                />
              );
            })}
        </div>
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </Container>
    </section>
  );
}

export default MainPage;
