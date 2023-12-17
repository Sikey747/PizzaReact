import { Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage';
import Header from './components/Header';
import Cart from './page/Cart';
import NotFound from './page/NotFound';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
