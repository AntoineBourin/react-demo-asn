import type { Product } from "../../types/products";

const API_URL = import.meta.env.VITE_API_DUMMY_URL;

/** Service dédié pour la récupération de données */
export const getProducts = async (): Promise<{ products: Product[] }> => {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Error occurred");
  }

  return response.json();
};

export const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Error occurred");
  }

  return response.json();
};
