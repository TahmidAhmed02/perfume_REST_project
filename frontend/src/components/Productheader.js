import React from "react";

// Import the NavLink component.
import { NavLink } from "react-router-dom";

export default function ProductHeader() {


  return (
    <div className="header">
      <NavLink to="allProducts">ALL PRODUCTS</NavLink>
      <NavLink to="clothes">clothes</NavLink>
      <NavLink to="perfumes">perfumes</NavLink>
      <NavLink to="accessories">accessories</NavLink>
    </div>
  )
}