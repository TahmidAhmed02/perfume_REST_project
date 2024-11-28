import React from "react";
import About from "./components/About"
import Home from "./components/Home";
import Product from "./components/Products"
import Contact from "./components/Contact";
import Cart from "./components/Cart"
import Perfumes from "./components/Perfumes"
import Root from './components/Root'
import Clothes from './components/Clothes'
import Accessories from './components/Accessories'
import AllProducts from './components/allProducts'


import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={ <Root/> }>

        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Cart" element={<Cart />} />
        
        <Route path="products" element={ <Product/> } >
          <Route path="AllProducts" element={ <AllProducts/> }/>
          <Route path="perfumes" element={ <Perfumes/> }/>
          <Route path="clothes" element={ <Clothes/> }/>
          <Route path="accessories" element={ <Accessories/> }/>
        </Route>
      </Route>
    </>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
