import React from "react";
import { Outlet } from "react-router-dom";
import ProductHeader from './Productheader'


export default function Product() {
  return (
    <div>
      <section class="products-description">
  <h1>Welcome to Our Products Page</h1>
    <p>Explore our carefully curated selection of high-quality products designed to meet your needs and exceed your expectations. From trendy clothing to the our traditional peices, we have something for everyone.</p>
    <p>Browse through our categories and find the perfect items to suit your style and budget. Shop with confidence, knowing that every product is chosen with care and backed by our commitment to quality and customer satisfaction.</p>
    <p>Don’t miss out on our latest arrivals and special offers—start exploring now and experience shopping like never before!</p>
  </section>
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