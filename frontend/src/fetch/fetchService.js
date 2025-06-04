import { BASE_URL } from "../components/Accessories";

export const fetchService = async () => {
    const response = await fetch(`${BASE_URL}/product`);
    if (!response.ok) {
      console.log("error 1")
      throw new Error("HTTP error!");
    }
    console.log("Success 1")
    return response.json();
  };
  
  export const createProductService = async (newProduct) => {
    return await fetch(`${BASE_URL}/product`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    console.log("created 1")
  };
  
  export const toggleOrderService = async (id) => {
    return await fetch(`${BASE_URL}/product/${id}/toggleOrder`, {
      method: "PATCH",
    });
    console.log("toggle 1")
  };
  
  export const deleteProductService = async (id) => {
    return await fetch(`${BASE_URL}/product/${id}`, {
      method: "DELETE",
    });
    console.log("delete 1")
  };
  