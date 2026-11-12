import * as z from "zod";

export const orderSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.email(),
});

/*
  fetch("", {
      method: "POST",
      body: JSON.stringify(formValues)
  })
  
  */

export type OrderType = z.infer<typeof orderSchema>;
