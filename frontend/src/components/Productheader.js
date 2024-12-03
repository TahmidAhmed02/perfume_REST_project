import React from "react";
import './css/ProductHeader.css'

// Import the NavLink component.
import { NavLink } from "react-router-dom";

export default function ProductHeader() {


  return (
    <div className="productHeader">
      <NavLink  to="allProducts"><span id='all'>ALL</span> Products</NavLink>
      <NavLink to="clothes">Clothes</NavLink>
      <NavLink to="perfumes">Perfumes</NavLink>
      <NavLink to="accessories">Accessories</NavLink>
    </div>
  )
}