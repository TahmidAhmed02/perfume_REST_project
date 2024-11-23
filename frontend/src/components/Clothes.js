import React, { useState, useEffect } from "react";

export default function Clothes() {
  const [clothes, setClothes] = useState([]);
  const [status, setStatus] = useState(false);

  async function handleOnclick(id) {
    await fetch(`http://localhost:5000/product/${id._id}/toggleOrder`, {
      method: "PATCH",
    });

    // Fetch the updated data after the PATCH request completes
    fetchData(id);
  }

  const fetchData = (id) => {
    fetch(`http://localhost:5000/product/${id._id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setStatus(data.ordered); // Update state with fetched data
      })
      .catch((error) => console.error("Error:", error));
  };

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

  // Log `status` whenever it updates
  useEffect(() => {
    console.log("Updated status:", status);
  }, [status]);

  return (
    <div>
      <h1>Clothes</h1>
      <h1>Ordered Status: {status ? "True" : "False"}</h1>
      <ul>
        {clothes.map((item) => (
          <li key={item._id}>
            <strong>Item:</strong> {item.item}
            <br /> <strong>Price:</strong> £{item.price}
            <button onClick={() => handleOnclick(item)}>ADD TO CART</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
