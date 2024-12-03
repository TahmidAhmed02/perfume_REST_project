import React from "react";
import './css/Header.css'

// Import the NavLink component.
import { NavLink } from "react-router-dom";

export default function Header () {


  return (
    <div className="header">
      <NavLink className="about" to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  )
}