import { useReducer } from "react";
import { ProductContext } from "./ProductContext";

interface ProductProviderProps {
  children: React.ReactNode;
}

export type ProductAction =
  | { type: "ADD_PRODUCT_LIKED"; product: string }
  | { type: "REMOVE_PRODUCT_LIKED"; product: string; id: number };

function productReducer(state: Array<string>, action: ProductAction) {
  switch (action.type) {
    case "ADD_PRODUCT_LIKED": {
      return [...state, action.product];
    }
    case "REMOVE_PRODUCT_LIKED": {
      return [...state.filter((el) => el !== action.product)];
    }
  }
}

/**
 * Le provider nous permet ici de propager le context à nos composants enfant et définir
 * un état pour le faire évoluer depuis l'extérieur.
 */
export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [store, dispatch] = useReducer(productReducer, []);

  return (
    <ProductContext value={{ store, dispatch }}>{children}</ProductContext>
  );
};
