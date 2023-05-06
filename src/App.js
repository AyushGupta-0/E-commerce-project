import React,{useContext} from 'react';
import {
  createBrowserRouter,RouterProvider,
  redirect,
} from 'react-router-dom';

import './App.css';

import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import Store from './Pages/Store';
import ProductDetails from './components/Products/ProductDetails';
import AuthContext from './store/auth-context';
import AuthPage from './Pages/AuthPage';



function App() {
  const authctx=useContext(AuthContext);
  const login =authctx.isLoggenIn;
  return (
    <>
    <RouterProvider router={router} />;
   
      </>
  );
}

const router = createBrowserRouter([
  { path: '/about', element: <About/> },
  { path: '/', element: <Home/> },
  { path: '/contact', element: <ContactUs/> },
  { path: '/store' , element:   <Store/> },
  { path: '/productdetails/:id' , element: <ProductDetails/>},
  { path: '/auth' , element : <AuthPage/>}
  
  
]);




export default App;