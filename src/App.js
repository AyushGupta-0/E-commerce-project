import React from 'react';
import {
  createBrowserRouter,RouterProvider
} from 'react-router-dom';

import './App.css';

import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import Store from './Pages/Store';

const router = createBrowserRouter([
  { path: '/about', element: <About/> },
  { path: '/', element: <Home/> },
  { path: '/contact', element: <ContactUs/> },
  { path: '/store' , element: <Store/>}
  
  
]);


function App() {
  return (
    <>
    <RouterProvider router={router} />;
   
      </>
  );
}

export default App;