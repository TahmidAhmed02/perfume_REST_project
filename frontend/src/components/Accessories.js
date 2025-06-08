import React, { useState, useEffect } from "react";

import {
  fetchService,
  createProductService,
  toggleOrderService,
  deleteProductService} from '../fetch/fetchService'

export const BASE_URL = "https://perfume-rest-project.onrender.com"


export default function Accessories() {
  const [accessories, setAccessories] = useState([]);
  const [itemInput, setItemInput] = useState('')
  const [priceInput, setPriceInput] = useState('')
  const [radioInput, setRadioInput] = useState('');

  const fetchAccessories = async () => {
    try {
      const data = await fetchService();
      setAccessories(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  
  const handleCreate = async () => {
    if (!itemInput || !priceInput || !radioInput) {
      alert("All fields must be filled out.");
      return;
    }
    const newProduct = {
      item: itemInput,
      price: priceInput,
      category: radioInput,
    };
    try {
      await createProductService(newProduct);
      fetchAccessories(); // Refresh data
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  // Function to handle CART toggle click
  async function handleOnclick(item) {
    await fetch(`${BASE_URL}/product/${item._id}/toggleOrder`, {
      method: "PATCH",
    }
  );

    try{
      await toggleOrderService(item._id);
      setAccessories((prevAccessories) =>
        prevAccessories.map((accessoriesItem) =>
          accessoriesItem._id === item._id
            ? accessoriesItem.category === "Accessories" // Check if the category is "Accessories"
              ? { ...accessoriesItem, ordered: !accessoriesItem.ordered } // Toggle the ordered status
              : accessoriesItem // If not "Accessories", return as is
            : accessoriesItem // If IDs don't match, return as is
      )
    );}catch (error) {
      console.error("Error toggling order:", error);
    }
  }

  //DELETE
  const handleDelete = async (item) => {
    try {
      await deleteProductService(item._id);
      fetchAccessories(); // Refresh data
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Fetch the initial Accessories data
  useEffect(() => {
    fetchAccessories();
  }, []); 
  


  return (
    <div >
      <h3 className="createInventory">Create Inventory</h3>

      <section className="creation">
        <section className="inputs">
        <label htmlFor="item" className="label">
          Item   <input className="input" type="text" id="item" onChange={(e) => setItemInput(e.target.value)} />
        </label>
        <label htmlFor="price" className="label">
          Price <input className="input" type="number" id="price" onChange={(e) => setPriceInput(e.target.value)} />
        </label>
      </section>

      <section>
        <input
          type="radio"
          id="clothes"
          name="color"
          value="Clothes"
          onChange={(e) => setRadioInput(e.target.value)}
        />
        <label htmlFor="clothes">Clothes</label>
        <input
          type="radio"
          id="Perfumes"
          name="color"
          value="Perfumes"
          onChange={(e) => setRadioInput(e.target.value)}
        />
        <label htmlFor="Perfumes">Perfumes</label>
        <input
          type="radio"
          id="accessories"
          name="color"
          value="Accessories"
          onChange={(e) => setRadioInput(e.target.value)}
        />
        <label htmlFor="accessories">Accessories</label>
      </section>

      <button className="submit" onClick={handleCreate}>Submit</button>
    </section>

    <h1 className="apiHeader">ALL Products</h1>
      <ul className="test">
        {accessories
          .filter((item) => item.category == 'Accessories')
          .map((item) => (
            <li key={item._id} className="mapped">
              <strong className="items">Item:</strong> {item.item}
              <br />
              <strong className="items">Price:</strong> £{item.price}
              <br />
              <strong className="items">Category:</strong> {item.category}
              <br />
              <button className="items" id="button1" onClick={() => handleOnclick(item)}>
                {item.ordered ? "Remove from cart" : "Add to cart"}
              </button>
              <button className="items" id="button2" onClick={() => handleDelete(item)}>Delete Item</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
