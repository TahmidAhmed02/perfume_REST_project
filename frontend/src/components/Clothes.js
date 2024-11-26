import React, { useState, useEffect } from "react";

export default function Clothes() {
  const [clothes, setClothes] = useState([]);
  const [item, setItem] = useState('');
  const [itemInput, setItemInput] = useState('')
  const [price, setPrice] = useState('');
  const [priceInput, setPriceInput] = useState('')
  const [radio, setRadio] = useState('');
  const [radioInput, setRadioInput] = useState('');

  // Function to handle button click
  async function handleOnclick(item) {
    await fetch(`http://localhost:5000/product/${item._id}/toggleOrder`, {
      method: "PATCH",
    });


    // Update the specific item's ordered status locally
    setClothes((prevClothes) =>
      prevClothes.map((clothingItem) =>
        clothingItem._id === item._id
          ? clothingItem.category === "Clothes" // Check if the category is "Clothes"
            ? { ...clothingItem, ordered: !clothingItem.ordered } // Toggle the ordered status
            : clothingItem // If not "Clothes", return as is
          : clothingItem // If IDs don't match, return as is
      )
    );
    
  }

  function liveItem(event) {
    setItemInput(event.target.value)
  }
  function livePrice(event) {
    setPriceInput(event.target.value)
  }
  function liveRadio(event) {
    setRadioInput(event.target.value)
  }

  async function handleCreate(event) {
    console.log(`"${itemInput}"   ${priceInput}    "${radioInput}"`)
     const newProduct = {
      "item": `${itemInput}`,
      "price": priceInput,
      "category": `${radioInput}`
  }
  console.log(newProduct)
  //Allow for reset input, live updating, seperation of concern 

    try{
      await fetch("http://localhost:5000/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
  }catch(error) {
    console.error("Error creating product:", error);
  }

    
  }

  async function handleDelete(item) {

    try{
      await fetch(`http://localhost:5000/product/${item._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  }catch(error) {
    console.error("Error creating product:", error);
  }

    
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
      <h3>Create Inventory</h3>

        <label htmlFor='item'>Item <input type='text' id="item" onChange={liveItem}/></label>
        <label htmlFor='price'>Price <input type='number' id="price" onChange={livePrice}/></label>

        <input type='radio' id="clothes" name="color" value='Clothes' onChange={liveRadio}/>
        <label htmlFor='clothes'>Clothes</label>
        <input type='radio' id="perfume" name="color" value='Perfume' onChange={liveRadio}/>
        <label htmlFor='perfume'>Perfume</label>
        <input type='radio' id="accessories" name="color" value='Accessories' onChange={liveRadio}/>
        <label htmlFor='accessories'>Accessories</label>
      
        <button onClick={handleCreate}>Submit</button>

      
      <ul>
        {clothes
          .filter((item) => item.category === "Clothes") // Only include "Clothes" items
          .map((item) => (
            <li key={item._id}>
              <strong>Item:</strong> {item.item}
              <br />
              <strong>Price:</strong> £{item.price}
              <br />
              <button onClick={() => handleOnclick(item)}>
                {item.ordered ? "Remove from cart" : "Add to cart"}
              </button>
              <button onClick={() => handleDelete(item)}>
                Delete Item
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
