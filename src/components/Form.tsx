import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const formSchema = z.object({
  firstName: z
    .string()
    .max(5, { message: "Maximum de caractères" })
    .min(2, { message: "Minimum requis" }),
  lastName: z.string().max(10).min(3),
  email: z.email(),
});

type FormType = z.infer<typeof formSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const handleSubmitForm = (formValues) => {
    console.log(formValues);
  };

  console.log(errors);
  console.log(Object.keys(errors).length > 0);
  console.log(register("firstName"));

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
      <input
        type="submit"
        disabled={Object.keys(errors).length > 0}
        value="Enregistrer"
      />
    </form>
  );
}
