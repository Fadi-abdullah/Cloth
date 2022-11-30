import { Routes, Route } from 'react-router-dom';
import './App.styles.scss';
import Nav from './routes/nav-bar/Nav';
import Home from './routes/home/Home';
import Shop from './routes/shop/Shop';
import Auth from './routes/auth/Auth';
import Checkout from './routes/checkout/Checkout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
