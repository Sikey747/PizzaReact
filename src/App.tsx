import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './Layout';
import Spinner from '../src/assets/img/spiner.svg?react';

const MainPage = lazy(() => import('./page/MainPage'));
const Modal = lazy(() => import('./components/Modal'));
const Cart = lazy(() => import('./page/Cart'));
const NotFound = lazy(() => import('./page/NotFound'));

function App() {
  const location = useLocation();
  const { state } = location;
  return (
    <div>
      <Routes location={state?.backgroundLocation || location}>
        <Route
          path="/"
          element={
            <Suspense
              fallback={<Spinner style={{ height: '70px', width: '70px' }} />}
            >
              <Layout />
            </Suspense>
          }
        >
          <Route index element={<MainPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/modal/:id" element={<Modal />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
