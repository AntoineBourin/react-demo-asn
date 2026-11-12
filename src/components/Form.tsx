import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { orderSchema, type OrderType } from "../types/order";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../lib/api/order";

export default function Form() {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({
    resolver: zodResolver(orderSchema),
    mode: "onChange",
  });
  const handleSubmitForm = (formValues: OrderType) => {
    console.log(formValues);
    mutateAsync(formValues);
    // setError("root")
    /*
  fetch("", {
      method: "POST",
      body: JSON.stringify(formValues)
  })
  
  */
  };

  console.log(isValid, errors);
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label>FirstName</label>
      <input
        type="text"
        name="firstName"
        placeholder="Votre prénom..."
        {...register("firstName")}
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}
      <label>LastName</label>
      <input
        type="text"
        name="lastName"
        placeholder="Votre nom..."
        {...register("lastName")}
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        placeholder="Votre email..."
        {...register("email")}
      />
      <input type="submit" value="Enregistrer" />
    </form>
  );
}
