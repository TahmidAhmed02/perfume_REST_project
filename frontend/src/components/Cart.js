import React, { useState, useEffect } from "react";
import {
  fetchService,
  toggleOrderService} from '../fetch/fetchService'

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
      <h2>YOUR BASKET</h2>
      <ul>
        {cart
          .filter((item) => item.ordered)
          .map((item) => (
            <li key={item._id}>
              <strong>Item:</strong> {item.item}
              <br />
              <strong>Price:</strong> £{item.price}
              <br />
              <button onClick={() => handleOnclick(item)}>
                Remove from cart
              </button>

            </li>
          ))}
      </ul>
    </div>
  );
}
