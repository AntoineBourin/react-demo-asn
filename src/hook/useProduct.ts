import { useEffect, useState } from "react";
import { getProduct } from "../lib/api/products";
import type { Product } from "../types/products";

export const useProduct = (id: string | undefined) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!id) return;

    getProduct(id)
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  }, [id]);

  return { product, isLoading, hasError };
};
