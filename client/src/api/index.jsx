// src/api/index.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// User login
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    console.error("Login error:", error);
    return { error: "Failed to login" };
  }
};

// Add product to cart
export const addToCart = async (productId, userToken) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`, // Send token for authentication
      },
      body: JSON.stringify({ productId }),
    });
    return await response.json();
  } catch (error) {
    console.error("Error adding to cart:", error);
    return { error: "Failed to add to cart" };
  }
};
