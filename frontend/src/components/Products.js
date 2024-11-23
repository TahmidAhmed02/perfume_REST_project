import React from "react";
import { Outlet } from "react-router-dom";
import ProductHeader from './Productheader'


export default function Product() {
  return (
    <div>
      <h1>PRODUCTS page</h1>
      <ProductHeader/>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

//logic for cart. Click 'add to cart' using '?' logic to switch between true and false 
//all trues are sent to /cart page