import type { Product } from "../../types/products";

const API_URL = import.meta.env.VITE_API_DUMMY_URL;

/** Service dédié pour la récupération de données */
export const getProducts = async (): Promise<{ products: Product[] }> => {
  return fetch(`${API_URL}/products`).then((res) => {
    if (!res.ok) {
      throw new Error("");
    }

    return res.json();
  });
};

export const getProduct = async (id: string): Promise<Product> => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const response = await fetch(`${API_URL}/products/${id}`);

      if (!response.ok) {
        reject("Error occurred");
      }

      resolve(response.json());
    }, 2000);
  });
};
