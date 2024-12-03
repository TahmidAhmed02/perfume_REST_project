import React, { useState, useEffect } from "react";
import {
  fetchService,
  createProductService,
  toggleOrderService,
  deleteProductService} from '../fetch/fetchService'
import './css/allProducts.css'


export default function Clothes() {
  const [clothes, setClothes] = useState([]);
  const [itemInput, setItemInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [radioInput, setRadioInput] = useState("");

  const fetchClothes = async () => {
    try {
      const data = await fetchService();
      setClothes(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

//CREATE
  const handleCreate = async () => {
    //To enforce complete inputs
    if (!itemInput || !priceInput || !radioInput) {
      alert("All fields must be filled out.");
      return;
    }
    //Places inputs into usable object
    const newProduct = {
      item: itemInput,
      price: priceInput,
      category: radioInput,
    };
    //Create inventory with given object
    try {
      await createProductService(newProduct);
      fetchClothes(); // Refresh data
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

//CART status
  //Toggle cart status
  const handleOnclick = async (item) => {
    try {
      await toggleOrderService(item._id);
      setClothes((prevClothes) =>
        prevClothes.map((clothingItem) =>
          clothingItem._id === item._id
            ? { ...clothingItem, ordered: !clothingItem.ordered }
            : clothingItem
        )
      );
    } catch (error) {
      console.error("Error toggling order:", error);
    }
  };


//Delete inventory
  const handleDelete = async (item) => {
    try {
      await deleteProductService(item._id);
      fetchClothes(); // Refresh data
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

//Refresh page upon creation, deletion and submission
  useEffect(() => {
    fetchClothes();
  }, []);

  return (
    <div>
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

    <h1 className="apiHeader">Clothes</h1>
      <ul className="test">
        {clothes
          .filter((item) => item.category === "Clothes")
          .map((item) => (
            <li key={item._id} className="mapped">
              <strong className="items">Item:</strong> {item.item}
              <br />
              <strong className="items">Price:</strong> £{item.price}
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
