import React from "react";

// Import the NavLink component.
import { NavLink } from "react-router-dom";

export default function Header () {


  return (
    <div className="header">
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  )
}