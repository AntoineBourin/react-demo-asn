import { createContext, useContext } from "react";
import type { ProductAction } from "./ProductProvider";

/** Création du context avec type et valeur par défaut */
export const ProductContext = createContext<{
  store: Array<string>;
  dispatch: React.ActionDispatch<[action: ProductAction]>;
} | null>(null);

/** Hook pour notre context pour sécuriser l'appel à l'extérieur, surtout si l'appel au context
 * est fait en dehors du Provider
 */
export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("You are trying to use the context outside the provider");
  }

  return context;
};
