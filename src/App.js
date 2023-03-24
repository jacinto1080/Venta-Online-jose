import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/nav-bar/nav-bar';
import CheckOut from './pages/check-out/check-out';
import Home from './pages/home/home';
import ProductList from './pages/Product-list/Product-list';
import Shop from './pages/shop/shop';
import SignIn from './pages/sign-in/sign-in';

const App = () => {

  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/shop/:category" element={<ProductList/>}/>
    </Routes>
    </>
  );
};
export default App;
