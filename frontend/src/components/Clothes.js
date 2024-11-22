import React, { useState, useEffect } from "react";

export default function Clothes() {

  const [clothes, setClothes] = useState([])


  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then((res) => {
        if (!res.ok) {
          throw new Error('HTTP error!');
        }
        return res.json();
      })
      .then((data) => {
        setClothes(data);
      })
      .catch((error) => console.error('Fetch error:', error));
  }, []);

 return (
    <div>
      <h1>Clothes</h1>
      <ul>
        {clothes.map((item) => (
          <li key={item._id}>
            <strong>Item:</strong> {item.item} <br />
            <strong>Price:</strong> ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );

}
