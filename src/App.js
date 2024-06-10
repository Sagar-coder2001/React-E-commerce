import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import Loginform from './Pages/LoginForm/LoginForm';
import SignupForm from './Pages/SignupFprm/SignupForm';
import { useState  } from 'react';
import Productdetail from './Pages/Productdetails/Productdetails';
import AllProduct from './Pages/Allproducts/AllProduct';

function App() {
  const [mode, setMode] = useState("dark");

  return (
    <>
    <div>
      <BrowserRouter>
      <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/cart" element ={<Cart mode = {mode}/>}/>
      <Route path = "/loginform" element ={<Loginform/>}/>
      <Route path = "/signupform" element ={<SignupForm/>}/>
      <Route path = "/product/:id" element ={<Productdetail/>}/>
      <Route path="/products/:categoryName" element={<AllProduct />} />
    </Routes>
    </BrowserRouter>
    </div>
    </>
  
  );
}

export default App;
