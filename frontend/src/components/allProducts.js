import React, { useState, useEffect } from "react";
import {
  fetchService,
  createProductService,
  toggleOrderService,
  deleteProductService} from '../fetch/fetchService'

export default function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [itemInput, setItemInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [radioInput, setRadioInput] = useState("");

  const fetchAllProducts = async () => {
    try {
      const data = await fetchService();
      setAllProducts(data);
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
      fetchAllProducts(); // Refresh data
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

//CART status
  //Toggle cart status
  const handleOnclick = async (item) => {
    try {
      await toggleOrderService(item._id);
      setAllProducts((prevAllProducts) =>
        prevAllProducts.map((AllProductsItem) =>
            AllProductsItem._id === item._id
            ? { ...AllProductsItem, ordered: !AllProductsItem.ordered }
            : AllProductsItem
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
      fetchAllProducts(); // Refresh data
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

//Refresh page upon creation, deletion and submission
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <h3>Create Inventory</h3>
      <label htmlFor="item">
        Item <input type="text" id="item" onChange={(e) => setItemInput(e.target.value)} />
      </label>
      <label htmlFor="price">
        Price <input type="number" id="price" onChange={(e) => setPriceInput(e.target.value)} />
      </label>
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
      <button onClick={handleCreate}>Submit</button>

      <ul>
        {allProducts
          .filter((item) => item.category)
          .map((item) => (
            <li key={item._id}>
              <strong>Item:</strong> {item.item}
              <br />
              <strong>Price:</strong> £{item.price}
              <br />
              <strong>Category:</strong> {item.category}
              <br />
              <button onClick={() => handleOnclick(item)}>
                {item.ordered ? "Remove from cart" : "Add to cart"}
              </button>
              <button onClick={() => handleDelete(item)}>Delete Item</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
