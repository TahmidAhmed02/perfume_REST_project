import React, { useState, useEffect } from "react";
import {
  fetchService,
  toggleOrderService} from '../fetch/fetchService'
import './css/cart.css'


export default function Cart() {
  const [cart, setCart] = useState([]);


  const fetchCart = async () => {
    try {
      const data = await fetchService();
      setCart(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };


//CART status
  //Toggle cart status
  const handleOnclick = async (item) => {
    try {
      await toggleOrderService(item._id);
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, ordered: !cartItem.ordered }
            : cartItem
        )
      );
    } catch (error) {
      console.error("Error toggling order:", error);
    }
  };




//Refresh page upon creation, deletion and submission
  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <section className="cart">
      <h2 className="apiHeader">YOUR BASKET</h2>
      <ul className="test">
        {cart
          .filter((item) => item.ordered)
          .map((item) => (
            <li key={item._id} className="cartmap">
              <strong className="items">Item:</strong> {item.item}
              <br />
              <strong className="items">Price:</strong> £{item.price}
              <br />
              <button className="items" id="buttonOne" onClick={() => handleOnclick(item)}>
                Remove from cart
              </button>

            </li>
          ))}
      </ul>
      </section>
    </div>
  );
}
