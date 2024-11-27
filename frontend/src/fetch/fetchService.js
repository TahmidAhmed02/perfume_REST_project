export const fetchService = async () => {
    const response = await fetch("http://localhost:5000/product");
    if (!response.ok) {
      throw new Error("HTTP error!");
    }
    return response.json();
  };
  
  export const createProductService = async (newProduct) => {
    return await fetch("http://localhost:5000/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
  };
  
  export const toggleOrderService = async (id) => {
    return await fetch(`http://localhost:5000/product/${id}/toggleOrder`, {
      method: "PATCH",
    });
  };
  
  export const deleteProductService = async (id) => {
    return await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
    });
  };
  