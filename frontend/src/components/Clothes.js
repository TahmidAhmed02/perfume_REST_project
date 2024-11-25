import React, { useState, useEffect } from "react";

export default function Clothes() {
  const [clothes, setClothes] = useState([]);

  // Function to handle button click
  async function handleOnclick(item) {
    await fetch(`http://localhost:5000/product/${item._id}/toggleOrder`, {
      method: "PATCH",
    });


    // Update the specific item's ordered status locally
    setClothes((prevClothes) =>
      prevClothes.map((clothingItem) =>
        clothingItem._id === item._id
          ? { ...clothingItem, ordered: !clothingItem.ordered }
          : clothingItem
      )
    );
  }

  // Fetch the initial clothes data
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => {
        if (!res.ok) {
          throw new Error("HTTP error!");
        }
        return res.json();
      })
      .then((data) => {
        setClothes(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div>
      <h1>Clothes</h1>
      <ul>
        {clothes.map((item) => (
          <li key={item._id}>
            <strong>Item:</strong> {item.item}
            <br />
            <strong>Price:</strong> £{item.price}
            <br />
            <button onClick={() => handleOnclick(item)}>
              {item.ordered ? "Remove from cart" : "Add to cart"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
