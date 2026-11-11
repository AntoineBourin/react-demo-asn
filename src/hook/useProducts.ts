import { useEffect, useState } from "react";
import { getProducts } from "../lib/api/products";
import type { Product } from "../types/products";

/** Hook custom - permet de gérer la récupération de la donnée mais aussi
 * la gestion d'erreur, de chargement.
 * Le hook useEffect nous permet de gérer les effets de bord, ici un tableau
 * de dépendance vide pour exécuter la fonction une seule fois, lors du rendu initial.
 */
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
