import type { OrderType } from "../../types/order";

export const createOrder = (order: OrderType) => {
  return fetch("https://api.antoinebourin.com/api/orders", {
    method: "POST",
    body: JSON.stringify({ ...order, productId: "5" }),
  });
};
