import React from "react";
import { Outlet } from "react-router-dom";
import ProductHeader from './Productheader'
import './css/Products.css'

export default function Product() {
  return (
    <div>
      <section class="allProducts">
        <h1 className="aboutProducts">Welcome to Our Products Page</h1>
        <p className="para">Explore our carefully curated selection of high-quality products designed to meet your needs and exceed your expectations. From trendy clothing to the our traditional peices, we have something for everyone.</p>
        <p className="para">Browse through our categories and find the perfect items to suit your style and budget. Shop with confidence, knowing that every product is chosen with care and backed by our commitment to quality and customer satisfaction.</p>
        <p className="para">Don’t miss out on our latest arrivals and special offers—start exploring now and experience shopping like never before!</p>
      <p>(* You are currently in the Default Admin Account *)</p>
      </section>
      
      <section className="productApi">
        <ProductHeader/>
        <main>
          <Outlet/>
        </main>
      </section>
    </div>
  );
}

//logic for cart. Click 'add to cart' using '?' logic to switch between true and false 
//all trues are sent to /cart page