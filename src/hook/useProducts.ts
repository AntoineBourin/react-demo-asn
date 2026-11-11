import { useEffect, useState } from "react";
import { getProducts } from "../lib/api/products";
import type { Product } from "../types/products";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    getProducts()
      .then((data: { products: Product[] }) => {
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch(() => setHasError(true));
  }, []);

  return { products, isLoading, hasError };
};
